import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !phone || !subject) {
      return NextResponse.json(
        { error: "Name, email, phone, and subject are required." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.APPOINTMENT_TO_EMAIL || "sales@digistano.com";
    const fromEmail =
      process.env.APPOINTMENT_FROM_EMAIL ||
      "DigiStano <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

          <p><strong>Message:</strong></p>
          <div style="padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;">
            ${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}