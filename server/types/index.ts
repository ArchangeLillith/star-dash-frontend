declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      currentUser?: ManagerTable;
      payload?: { id: string };
    }
  }
}

export type ManagerTable = {
  manager_id: UUID;
  manager_name: string;
};

// export type RunTable = {
//   teamsPerHour:
// }

export type Log = {
  id: number;
  user_id: string;
  action: string;
  details: string;
  created_at: string;
};

export type UUID = string & { __brand: 'UUID' };

export function isUUID(value: string): value is UUID {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}
