import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { Resend } from "resend";

type RentalRequestPayload = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  rentalStartDate: string;
  rentalEndDate: string;
  purpose?: string;
  selectedEquipment: string[];
};

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

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RentalRequestPayload;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const company = body.company?.trim() || "";
    const rentalStartDate = body.rentalStartDate?.trim();
    const rentalEndDate = body.rentalEndDate?.trim();
    const purpose = body.purpose?.trim() || "";
    const selectedEquipment = Array.isArray(body.selectedEquipment)
      ? body.selectedEquipment.map((x) => String(x).trim()).filter(Boolean)
      : [];

    if (!fullName || !email || !phone || !rentalStartDate || !rentalEndDate) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (selectedEquipment.length === 0) {
      return NextResponse.json(
        { success: false, message: "Please select at least one equipment item" },
        { status: 400 }
      );
    }

    const insertQuery = `
      INSERT INTO rental_requests (
        full_name,
        email,
        phone,
        company,
        rental_start_date,
        rental_end_date,
        purpose,
        selected_equipment
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING id, created_at
    `;

    const values = [
      fullName,
      email,
      phone,
      company,
      rentalStartDate,
      rentalEndDate,
      purpose,
      selectedEquipment,
    ];

    const dbResult = await pool.query(insertQuery, values);
    const inserted = dbResult.rows[0];

    const resendKey = process.env.RESEND_API_KEY;
    const salesEmail = process.env.APPOINTMENT_TO_EMAIL;
    const rentalEmail = process.env.RENTAL_TO_EMAIL;
    const fromEmail = process.env.APPOINTMENT_FROM_EMAIL;

    if (!resendKey || !salesEmail || !rentalEmail || !fromEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Rental request saved, but email settings are missing in environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);
    const equipmentHtml = selectedEquipment
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [salesEmail, rentalEmail],
      subject: `New Rental Request - ${fullName}`,
      html: `
        <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
              <div style="background:#0f172a;padding:24px;text-align:center;">
                <img
                  src="https://digistano-website.vercel.app/images/logo.png"
                  alt="DigiStano"
                  style="height:50px;max-width:180px;object-fit:contain;"
                />
              </div>

              <div style="padding:28px;">
                <h2 style="margin:0 0 16px;font-size:22px;color:#0f172a;">
                  New Rental Request
                </h2>

                <div style="background:#f8fafc;padding:18px;border-radius:12px;border:1px solid #e2e8f0;">
                  <p><strong>Submission ID:</strong> ${inserted.id}</p>
                  <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
                  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                  <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                  <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
                  <p><strong>Start Date:</strong> ${escapeHtml(rentalStartDate)}</p>
                  <p><strong>End Date:</strong> ${escapeHtml(rentalEndDate)}</p>
                  <p><strong>Purpose:</strong> ${escapeHtml(purpose || "N/A")}</p>

                  <p><strong>Equipment:</strong></p>
                  <ul style="margin-top:6px;">
                    ${equipmentHtml}
                  </ul>
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
      console.error("Rental admin email send failed:", adminEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Rental request saved, but failed to send admin notification email.",
          resendError: adminEmailResult.error,
        },
        { status: 500 }
      );
    }

    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Your rental request was received",
      html: `
        <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
              <div style="background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%);padding:28px 32px;text-align:center;">
                <img
                  src="https://digistano-website.vercel.app/images/logo.png"
                  alt="DigiStano"
                  style="height:56px;max-width:220px;object-fit:contain;"
                />
              </div>

              <div style="padding:32px;">
                <h2 style="margin:0 0 16px;font-size:28px;line-height:1.3;color:#0f172a;">
                  Thank you, ${escapeHtml(fullName)}
                </h2>

                <p style="margin:0 0 20px;font-size:16px;line-height:1.8;color:#334155;">
                  We have received your rental request successfully.
                  Our team will review availability and contact you shortly with the next steps.
                </p>

                <div style="margin:24px 0;padding:20px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc;">
                  <h3 style="margin:0 0 14px;font-size:18px;color:#0f172a;">Rental Request Details</h3>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Rental Start Date:</strong> ${escapeHtml(rentalStartDate)}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Rental End Date:</strong> ${escapeHtml(rentalEndDate)}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Company:</strong> ${escapeHtml(company || "N/A")}
                  </p>

                  <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                    <strong>Purpose:</strong> ${escapeHtml(purpose || "N/A")}
                  </p>

                  <div style="margin-top:14px;">
                    <p style="margin:0 0 8px;font-size:15px;color:#334155;">
                      <strong>Selected Equipment:</strong>
                    </p>
                    <ul style="margin:0;padding-left:20px;color:#334155;font-size:15px;line-height:1.8;">
                      ${equipmentHtml}
                    </ul>
                  </div>
                </div>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:#475569;">
                  If you need to update your rental request, simply reply to this email and our team will assist you.
                </p>

                <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />

                <div style="display:flex;align-items:center;gap:14px;">
                  <img
                    src="https://digistano-website.vercel.app/images/logo.png"
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
                  This is an automated confirmation email from DigiStano Energy Trading & Services LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (userEmailResult.error) {
      console.error("Rental user email send failed:", userEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Rental request saved, but failed to send confirmation email to user.",
          resendError: userEmailResult.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Rental request submitted successfully",
      id: inserted.id,
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id,
    });
  } catch (error) {
    console.error("Rental submit error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit rental request" },
      { status: 500 }
    );
  }
}