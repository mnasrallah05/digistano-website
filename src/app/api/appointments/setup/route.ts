import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS engineering_service_appointments (
        id BIGSERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        appointment_date DATE NOT NULL,
        time_slot TEXT NOT NULL,
        purpose TEXT,
        meeting_type TEXT NOT NULL,
        phone TEXT NOT NULL,
        service_name TEXT NOT NULL DEFAULT 'Engineering Services',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    return NextResponse.json({
      success: true,
      message: "engineering_service_appointments table is ready",
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create table" },
      { status: 500 }
    );
  }
}