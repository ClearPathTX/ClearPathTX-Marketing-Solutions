import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/db";

// This endpoint initializes the database tables
// Call it once after deployment: GET /api/init-db
export async function GET() {
  try {
    await initDatabase();
    return NextResponse.json({
      success: true,
      message: "Database tables initialized successfully",
    });
  } catch (error) {
    console.error("Error initializing database:", error);
    return NextResponse.json(
      { error: "Failed to initialize database" },
      { status: 500 }
    );
  }
}
