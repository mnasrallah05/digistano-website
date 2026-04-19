import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { Resend } from "resend";

type AppointmentPayload = {
  fullName: string;
  email: string;
  appointmentDate: string;
  timeSlot: string;
  purpose?: string;
  meetingType: string;
  phone: string;
  serviceName?: string;
  website?: string;
  formStartedAt?: string;
  recaptchaToken?: string;
};

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  challenge_ts?: string;
  "error-codes"?: string[];
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  rateLimitStore.set(ip, record);
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function looksLikeRandomString(value: string): boolean {
  const trimmed = value.trim();

  if (trimmed.length < 10) return false;

  const noSpaces = !/\s/.test(trimmed);
  const alphaNumOnly = /^[A-Za-z0-9]+$/.test(trimmed);
  const hasMixedCase = /[a-z]/.test(trimmed) && /[A-Z]/.test(trimmed);
  const longToken = trimmed.length >= 14;

  return noSpaces && alphaNumOnly && hasMixedCase && longToken;
}

function countUrls(value: string): number {
  const matches = value.match(/https?:\/\/|www\./gi);
  return matches ? matches.length : 0;
}

function isValidDateString(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function validatePayload(data: {
  fullName: string;
  email: string;
  appointmentDate: string;
  timeSlot: string;
  purpose: string;
  meetingType: string;
  phone: string;
  serviceName: string;
}) {
  const {
    fullName,
    email,
    appointmentDate,
    timeSlot,
    purpose,
    meetingType,
    phone,
    serviceName,
  } = data;

  if (
    !fullName ||
    !email ||
    !appointmentDate ||
    !timeSlot ||
    !meetingType ||
    !phone ||
    !purpose
  ) {
    return "Missing required fields.";
  }

  if (!isValidEmail(email)) {
    return "Invalid email address.";
  }

  if (fullName.length < 2 || fullName.length > 120) {
    return "Please enter a valid full name.";
  }

  if (phone.length < 6 || phone.length > 40) {
    return "Please enter a valid phone number.";
  }

  if (purpose.length < 10 || purpose.length > 3000) {
    return "Please enter a valid purpose of appointment.";
  }

  if (serviceName.length > 160) {
    return "Invalid service name.";
  }

  if (!isValidDateString(appointmentDate)) {
    return "Invalid appointment date.";
  }

  if (timeSlot.length < 3 || timeSlot.length > 60) {
    return "Invalid time slot.";
  }

  if (meetingType.length < 3 || meetingType.length > 40) {
    return "Invalid meeting type.";
  }

  if (countUrls(purpose) > 2) {
    return "Suspicious content detected.";
  }

  if (looksLikeRandomString(fullName) || looksLikeRandomString(purpose)) {
    return "Suspicious content detected.";
  }

  const appointment = new Date(appointmentDate);
  if (Number.isNaN(appointment.getTime())) {
    return "Invalid appointment date.";
  }

  return null;
}

async function verifyRecaptcha(
  token: string,
  ip: string
): Promise<{ ok: boolean; message?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { ok: false, message: "reCAPTCHA secret key is missing." };
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  params.append("remoteip", ip);

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  const data = (await response.json()) as RecaptchaResponse;

  if (!data.success) {
    return { ok: false, message: "reCAPTCHA verification failed." };
  }

  if (data.action !== "appointment_form_submit") {
    return { ok: false, message: "Invalid reCAPTCHA action." };
  }

  if ((data.score ?? 0) < 0.5) {
    return { ok: false, message: "Suspicious activity detected." };
  }

  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (!rateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as AppointmentPayload;

    // Honeypot
    if (body.website && body.website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Appointment submitted successfully",
      });
    }

    // Timing check
    const startedAt = Number(body.formStartedAt || "0");
    const now = Date.now();
    const elapsedMs = now - startedAt;

    if (!startedAt || Number.isNaN(startedAt) || elapsedMs < 3000) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission blocked. Please try again.",
        },
        { status: 400 }
      );
    }

    // reCAPTCHA
    const recaptchaToken = body.recaptchaToken?.trim() || "";
    if (!recaptchaToken) {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification is required.",
        },
        { status: 400 }
      );
    }

    const recaptchaCheck = await verifyRecaptcha(recaptchaToken, ip);
    if (!recaptchaCheck.ok) {
      return NextResponse.json(
        {
          success: false,
          message: recaptchaCheck.message || "reCAPTCHA verification failed.",
        },
        { status: 400 }
      );
    }

    const fullName = body.fullName?.trim() || "";
    const email = body.email?.trim() || "";
    const appointmentDate = body.appointmentDate?.trim() || "";
    const timeSlot = body.timeSlot?.trim() || "";
    const purpose = body.purpose?.trim() || "";
    const meetingType = body.meetingType?.trim() || "";
    const phone = body.phone?.trim() || "";
    const serviceName = body.serviceName?.trim() || "Engineering Services";

    const validationError = validatePayload({
      fullName,
      email,
      appointmentDate,
      timeSlot,
      purpose,
      meetingType,
      phone,
      serviceName,
    });

    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    const insertQuery = `
      INSERT INTO engineering_service_appointments (
        full_name,
        email,
        appointment_date,
        time_slot,
        purpose,
        meeting_type,
        phone,
        service_name
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING id, created_at
    `;

    const values = [
      fullName,
      email,
      appointmentDate,
      timeSlot,
      purpose,
      meetingType,
      phone,
      serviceName,
    ];

    const dbResult = await pool.query(insertQuery, values);
    const inserted = dbResult.rows[0];

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.APPOINTMENT_TO_EMAIL;
    const fromEmail = process.env.APPOINTMENT_FROM_EMAIL;

    if (!resendKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Appointment saved, but email settings are missing in environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Engineering Appointment - ${fullName}`,
      html: `
        <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
              <div style="background:#0f172a;padding:24px;text-align:center;">
                <img
                  src="https://www.digistano.com/images/logo.png"
                  alt="DigiStano"
                  style="height:50px;max-width:180px;object-fit:contain;"
                />
              </div>

              <div style="padding:28px;">
                <h2 style="margin:0 0 16px;font-size:22px;color:#0f172a;">
                  New Engineering Appointment
                </h2>

                <div style="background:#f8fafc;padding:18px;border-radius:12px;border:1px solid #e2e8f0;">
                  <p><strong>Submission ID:</strong> ${inserted.id}</p>
                  <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
                  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                  <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                  <p><strong>Date:</strong> ${escapeHtml(appointmentDate)}</p>
                  <p><strong>Time:</strong> ${escapeHtml(timeSlot)}</p>
                  <p><strong>Meeting Type:</strong> ${escapeHtml(meetingType)}</p>
                  <p><strong>Service:</strong> ${escapeHtml(serviceName)}</p>
                  <p><strong>Purpose:</strong> ${escapeHtml(purpose || "N/A")}</p>
                </div>

                <p style="margin-top:20px;color:#64748b;font-size:13px;">
                  Submitted at: ${inserted.created_at}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Admin email send failed:", adminEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Appointment saved, but failed to send admin notification email.",
          resendError: adminEmailResult.error,
        },
        { status: 500 }
      );
    }

    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Your engineering appointment request was received",
      html: `
        <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
              <div style="background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%);padding:28px 32px;text-align:center;">
                <img
                  src="https://www.digistano.com/images/logo.png"
                  alt="DigiStano"
                  style="height:56px;max-width:220px;object-fit:contain;"
                />
              </div>

              <div style="padding:32px;">
                <h2 style="margin:0 0 16px;font-size:28px;line-height:1.3;color:#0f172a;">
                  Thank you, ${escapeHtml(fullName)}
                </h2>

                <p style="margin:0 0 20px;font-size:16px;line-height:1.8;color:#334155;">
                  We have received your engineering service appointment request successfully.
                  Our team will review your details and contact you shortly to confirm the appointment.
                </p>

                <div style="margin:24px 0;padding:20px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc;">
                  <h3 style="margin:0 0 14px;font-size:18px;color:#0f172a;">Request Details</h3>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Appointment Date:</strong> ${escapeHtml(appointmentDate)}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Preferred Time Slot:</strong> ${escapeHtml(timeSlot)}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Meeting Type:</strong> ${escapeHtml(meetingType)}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Service Name:</strong> ${escapeHtml(serviceName)}
                  </p>

                  <p style="margin:0;font-size:15px;color:#334155;">
                    <strong>Purpose:</strong> ${escapeHtml(purpose || "N/A")}
                  </p>
                </div>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:#475569;">
                  If you need to update your request, simply reply to this email and our team will assist you.
                </p>

                <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />

                <div style="display:flex;align-items:center;gap:14px;">
                  <img
                    src="https://www.digistano.com/images/logo.png"
                    alt="DigiStano"
                    style="height:40px;max-width:140px;object-fit:contain;"
                  />
                  <div>
                    <p style="margin:0;font-size:15px;font-weight:bold;color:#0f172a;">
                      DigiStano Energy Trading & Services LLC
                    </p>
                    <p style="margin:4px 0 0;font-size:13px;color:#64748b;">
                      Professional Testing, Engineering & Technical Solutions
                    </p>
                  </div>
                </div>
              </div>

              <div style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
                <p style="margin:0;font-size:12px;line-height:1.7;color:#64748b;">
                  This is an automated confirmation email from DigiStano Energy Trading & Services LLC.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (userEmailResult.error) {
      console.error("User email send failed:", userEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Appointment saved, but failed to send confirmation email to user.",
          resendError: userEmailResult.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment submitted successfully",
      id: inserted.id,
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id,
    });
  } catch (error) {
    console.error("Appointment submit error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit appointment" },
      { status: 500 }
    );
  }
}