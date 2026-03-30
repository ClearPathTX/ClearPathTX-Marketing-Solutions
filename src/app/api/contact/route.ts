import { NextRequest, NextResponse } from "next/server";

const CLARION_API = "https://api.clarionlabs.ai";
const ORG_SLUG = "clearpath-solutions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${CLARION_API}/website-intake/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ org_slug: ORG_SLUG, name, email, phone, message }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || "Failed to save contact information" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: data.id,
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
