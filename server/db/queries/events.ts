import { DBEvent } from 'server/types/db.types';
import { Query } from '../query';

//GET all events
const all = (): Promise<DBEvent[]> =>
  Query<DBEvent[]>(`
    SELECT
      *
    FROM
      sd_events;
  `);

export default { all };
