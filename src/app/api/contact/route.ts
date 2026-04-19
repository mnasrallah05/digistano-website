import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
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

function validatePayload(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = data;

  if (!name || !email || !phone || !subject || !message) {
    return "Name, email, phone, subject, and message are required.";
  }

  if (name.length < 2 || name.length > 120) {
    return "Please enter a valid name.";
  }

  if (subject.length < 3 || subject.length > 160) {
    return "Please enter a valid subject.";
  }

  if (message.length < 10 || message.length > 3000) {
    return "Please enter a valid message.";
  }

  if (phone.length < 6 || phone.length > 40) {
    return "Please enter a valid phone number.";
  }

  if (!isValidEmail(email)) {
    return "Invalid email address.";
  }

  if (countUrls(subject) > 0 || countUrls(message) > 2) {
    return "Suspicious content detected.";
  }

  if (looksLikeRandomString(name) || looksLikeRandomString(subject)) {
    return "Suspicious content detected.";
  }

  if (looksLikeRandomString(message) && message.length < 40) {
    return "Suspicious content detected.";
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

  if (data.action !== "contact_form_submit") {
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

    const body = (await req.json()) as ContactPayload;

    // Honeypot
    if (body.website && body.website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
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

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    const validationError = validatePayload({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    const insertQuery = `
      INSERT INTO contact_messages (
        name,
        email,
        phone,
        subject,
        message
      )
      VALUES ($1,$2,$3,$4,$5)
      RETURNING id, created_at
    `;

    const values = [name, email, phone, subject, message];
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
            "Contact message saved, but email settings are missing in environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <div style="padding: 24px 0 12px 0; border-bottom: 1px solid #e2e8f0;">
            <h2 style="margin: 0; font-size: 28px; color: #0f172a;">New Contact Form Submission</h2>
            <p style="margin: 8px 0 0 0; color: #475569;">A new inquiry was submitted through the DigiStano website.</p>
          </div>

          <div style="padding: 24px 0;">
            <p><strong>Submission ID:</strong> ${inserted.id}</p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <div style="padding:16px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </div>

            <p style="margin-top: 20px;"><strong>Created At:</strong> ${inserted.created_at}</p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <img
              src="https://www.digistano.com/images/logo.png"
              alt="DigiStano Energy L.L.C"
              style="max-height: 48px; width: auto; margin-bottom: 10px;"
            />
            <p style="margin: 0; font-weight: 700; color: #0f172a;">Digistano Energy L.L.C.</p>
          </div>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Contact admin email send failed:", adminEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Contact message saved, but failed to send admin notification email.",
          resendError: adminEmailResult.error,
        },
        { status: 500 }
      );
    }

    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Your message was received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <div style="padding: 24px 0 12px 0; border-bottom: 1px solid #e2e8f0;">
            <h2 style="margin: 0; font-size: 28px; color: #0f172a;">Thank you, ${escapeHtml(name)}</h2>
            <p style="margin: 8px 0 0 0; color: #475569;">We have received your message and our team will contact you soon.</p>
          </div>

          <div style="padding: 24px 0;">
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

            <p style="margin-bottom: 8px;"><strong>Your Message:</strong></p>
            <div style="padding:16px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <img
              src="https://www.digistano.com/images/logo.png"
              alt="DigiStano Energy L.L.C"
              style="max-height: 48px; width: auto; margin-bottom: 10px;"
            />
            <p style="margin: 0; font-weight: 700; color: #0f172a;">Digistano Energy L.L.C.</p>
          </div>
        </div>
      `,
    });

    if (userEmailResult.error) {
      console.error("Contact user email send failed:", userEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Contact message saved, but failed to send confirmation email to user.",
          resendError: userEmailResult.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: inserted.id,
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}