declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      currentUser?: AuthorsTable;
      payload?: { id: string };
    }
  }
}

export type ManagerTable = {
  id: UUID;
  username: string;
}

export type RunTable = {
  teamsPerHour: 
}

export type Log = {
  id: number;
  user_id: string;
  action: string;
  details: string;
  created_at: string;
};


type UUID = string & { __brand: 'UUID' };

function isUUID(value: string): value is UUID {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}

function createUUID(value: string): UUID {
  if (!isUUID(value)) {
    throw new Error(`Invalid UUID: ${value}`);
  }
  return value as UUID;
}

// Usage
const rawString = '123e4567-e89b-12d3-a456-426614174000';
const validUUID = createUUID(rawString); // ✅ Works fine
console.log('Valid UUID:', validUUID);

const badString = 'not-a-uuid';
const invalidUUID = createUUID(badString); // ❌ Throws an error at runtime
