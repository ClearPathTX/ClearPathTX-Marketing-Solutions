import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, answers, contactInfo } = body;

    // Validate required fields
    if (!serviceType || !answers || !contactInfo?.name || !contactInfo?.email) {
      return NextResponse.json(
        { error: "Service type, answers, name, and email are required" },
        { status: 400 }
      );
    }

    // Extract key fields from answers for easier querying
    const businessName = answers["business-name"] || null;
    const businessIndustry = answers["business-industry"] || null;
    const budget = answers["budget"] || null;
    const timeline = answers["timeline"] || null;

    // Insert into database
    const result = await query(
      `INSERT INTO assessments (service_type, answers, contact_name, contact_email, contact_phone, contact_company, business_name, business_industry, budget, timeline, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING id, created_at`,
      [
        serviceType,
        JSON.stringify(answers),
        contactInfo.name,
        contactInfo.email,
        contactInfo.phone || null,
        contactInfo.company || null,
        businessName,
        businessIndustry,
        budget,
        timeline,
        contactInfo.notes || null,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Assessment submitted successfully",
        id: result.rows[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving assessment:", error);
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM assessments ORDER BY created_at DESC LIMIT 100"
    );
    return NextResponse.json({ assessments: result.rows });
  } catch (error) {
    console.error("Error fetching assessments:", error);
    return NextResponse.json(
      { error: "Failed to fetch assessments" },
      { status: 500 }
    );
  }
}
