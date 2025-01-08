import { isUUID, UUID } from 'server/types';
import { v4 as uuidv4 } from 'uuid';

export function generateUUID(): UUID {
  const newUUID = uuidv4();
  if (!isUUID(newUUID)) {
    throw new Error(`Generated an invalid UUID: ${newUUID}`);
  }
  return newUUID as UUID;
}
