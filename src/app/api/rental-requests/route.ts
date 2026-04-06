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
      .map((item) => `<li>${item}</li>`)
      .join("");

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [salesEmail, rentalEmail],
      subject: `New Rental Request - ${fullName}`,
      html: `
        <h2>New Rental Request</h2>
        <p><strong>Submission ID:</strong> ${inserted.id}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Rental Start Date:</strong> ${rentalStartDate}</p>
        <p><strong>Rental End Date:</strong> ${rentalEndDate}</p>
        <p><strong>Purpose:</strong> ${purpose || "N/A"}</p>
        <p><strong>Selected Equipment:</strong></p>
        <ul>${equipmentHtml}</ul>
        <p><strong>Created At:</strong> ${inserted.created_at}</p>
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
        <h2>Thank you, ${fullName}</h2>
        <p>We have received your rental request.</p>
        <p><strong>Rental Start Date:</strong> ${rentalStartDate}</p>
        <p><strong>Rental End Date:</strong> ${rentalEndDate}</p>
        <p><strong>Selected Equipment:</strong></p>
        <ul>${equipmentHtml}</ul>
        <p>Our team will contact you shortly regarding availability and next steps.</p>
        <p>DigiStano</p>
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