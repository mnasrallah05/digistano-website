import { Pool, type QueryResult, type QueryResultRow } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
}

function getConnectionString(): string {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  return connectionString;
}

function createPool(): Pool {
  const connectionString = getConnectionString();

  return new Pool({
    connectionString,
    ssl:
      connectionString.includes("localhost") ||
      connectionString.includes("127.0.0.1")
        ? false
        : { rejectUnauthorized: false },
  });
}

function getPool(): Pool {
  if (process.env.NODE_ENV === "production") {
    return createPool();
  }

  if (!global.__pgPool) {
    global.__pgPool = createPool();
  }

  return global.__pgPool;
}

export const pool = {
  query: <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ): Promise<QueryResult<T>> => {
    return getPool().query<T>(text, params);
  },
};