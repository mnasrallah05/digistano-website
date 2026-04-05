import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rental_requests (
        id BIGSERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        company TEXT,
        rental_start_date DATE NOT NULL,
        rental_end_date DATE NOT NULL,
        purpose TEXT,
        selected_equipment TEXT[] NOT NULL DEFAULT '{}',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    return NextResponse.json({
      success: true,
      message: "rental_requests table is ready",
    });
  } catch (error) {
    console.error("Rental setup error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create rental_requests table" },
      { status: 500 }
    );
  }
}