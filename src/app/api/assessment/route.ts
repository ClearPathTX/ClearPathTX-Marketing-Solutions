import { NextRequest, NextResponse } from "next/server";

const CLARION_API = "https://api.clarionlabs.ai";
const ORG_SLUG = "clearpath-solutions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, answers, contactInfo } = body;

    if (!serviceType || !answers || !contactInfo?.name || !contactInfo?.email) {
      return NextResponse.json(
        { error: "Service type, answers, name, and email are required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${CLARION_API}/website-intake/assessment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        org_slug: ORG_SLUG,
        service_type: serviceType,
        contact_name: contactInfo.name,
        contact_email: contactInfo.email,
        contact_phone: contactInfo.phone || null,
        contact_company: contactInfo.company || null,
        notes: contactInfo.notes || null,
        answers,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || "Failed to save assessment" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Assessment submitted successfully",
        id: data.id,
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
