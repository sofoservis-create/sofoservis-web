import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
}

// DATABASE_URL_OVERRIDE is a dev/test-only escape hatch so we can simulate a
// down DB without touching the real DATABASE_URL secret. Never set it in prod.
const connectionString =
  process.env.DATABASE_URL_OVERRIDE || process.env.DATABASE_URL;

const pool =
  global.__pgPool ||
  new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 3_000,
  });

if (process.env.NODE_ENV !== "production") {
  global.__pgPool = pool;
}

export async function query<T = unknown>(
  text: string,
  params?: unknown[]
): Promise<{ rows: T[]; rowCount: number }> {
  const res = await pool.query(text, params);
  return { rows: res.rows as T[], rowCount: res.rowCount ?? 0 };
}

export { pool };
