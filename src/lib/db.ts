import { Pool } from "pg";

// Create a connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // For AWS RDS
  },
  max: 10, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;

// Helper function to run queries
export async function query(text: string, params?: unknown[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

// Initialize database tables
export async function initDatabase() {
  const createContactsTable = `
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createAssessmentsTable = `
    CREATE TABLE IF NOT EXISTS assessments (
      id SERIAL PRIMARY KEY,
      service_type VARCHAR(100) NOT NULL,
      answers JSONB NOT NULL,
      contact_name VARCHAR(255) NOT NULL,
      contact_email VARCHAR(255) NOT NULL,
      contact_phone VARCHAR(50),
      contact_company VARCHAR(255),
      business_name VARCHAR(255),
      business_industry VARCHAR(255),
      budget VARCHAR(100),
      timeline VARCHAR(100),
      status VARCHAR(50) DEFAULT 'new',
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Create index on commonly queried fields
  const createAssessmentIndexes = `
    CREATE INDEX IF NOT EXISTS idx_assessments_status ON assessments(status);
    CREATE INDEX IF NOT EXISTS idx_assessments_service_type ON assessments(service_type);
    CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments(created_at DESC);
  `;

  try {
    await query(createContactsTable);
    await query(createAssessmentsTable);
    await query(createAssessmentIndexes);
    console.log("Database tables initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}
