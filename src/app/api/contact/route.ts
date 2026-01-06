import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await query(
      `INSERT INTO contacts (name, email, phone, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
      [name, email, phone || null, message || null]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: result.rows[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact information" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100"
    );
    return NextResponse.json({ contacts: result.rows });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
