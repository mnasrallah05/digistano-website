import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
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
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim() || "";

    if (!name || !email || !phone || !subject) {
      return NextResponse.json(
        { success: false, message: "Name, email, phone, and subject are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>

          <p><strong>Submission ID:</strong> ${inserted.id}</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

          <p><strong>Message:</strong></p>
          <div style="padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;">
            ${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}
          </div>

          <p><strong>Created At:</strong> ${inserted.created_at}</p>
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
        <h2>Thank you, ${escapeHtml(name)}</h2>
        <p>We have received your message and our team will contact you soon.</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;">
          ${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}
        </div>
        <p>DigiStano</p>
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