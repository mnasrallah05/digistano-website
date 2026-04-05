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
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AppointmentPayload;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const appointmentDate = body.appointmentDate?.trim();
    const timeSlot = body.timeSlot?.trim();
    const purpose = body.purpose?.trim() || "";
    const meetingType = body.meetingType?.trim();
    const phone = body.phone?.trim();
    const serviceName = body.serviceName?.trim() || "Engineering Services";

    if (
      !fullName ||
      !email ||
      !appointmentDate ||
      !timeSlot ||
      !meetingType ||
      !phone
    ) {
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
        <h2>New Engineering Service Appointment</h2>
        <p><strong>Submission ID:</strong> ${inserted.id}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
        <p><strong>Preferred Time Slot:</strong> ${timeSlot}</p>
        <p><strong>Meeting Type:</strong> ${meetingType}</p>
        <p><strong>Service Name:</strong> ${serviceName}</p>
        <p><strong>Purpose:</strong> ${purpose || "N/A"}</p>
        <p><strong>Created At:</strong> ${inserted.created_at}</p>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Admin email send failed:", adminEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Appointment saved, but failed to send admin notification email.",
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
        <h2>Thank you, ${fullName}</h2>
        <p>We have received your engineering service appointment request.</p>
        <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
        <p><strong>Preferred Time Slot:</strong> ${timeSlot}</p>
        <p><strong>Meeting Type:</strong> ${meetingType}</p>
        <p><strong>Purpose:</strong> ${purpose || "N/A"}</p>
        <p>Our team will contact you shortly to confirm the appointment.</p>
        <p>DigiStano</p>
      `,
    });

    if (userEmailResult.error) {
      console.error("User email send failed:", userEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Appointment saved, but failed to send confirmation email to user.",
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