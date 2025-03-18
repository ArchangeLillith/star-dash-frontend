import type { ResultSetHeader } from 'mysql2';

import { Query, QueryMetadata } from '../query';
import { UUID } from 'server/types';
import { LeadManagersTable } from 'server/types/db.types';

const writeLeadManager = (
  manager_id: UUID,
  event_id: UUID
): Promise<ResultSetHeader> => {
  return QueryMetadata(
    /* sql */ 'INSERT INTO sd_lead_managers (manager_id, event_id) VALUES (?,?);',
    [manager_id, event_id]
  );
};

const findLead = (id: UUID): Promise<LeadManagersTable> => {
  return Query(
    /* sql */ 'SELECT * FROM sd_lead_managers WHERE manager_id = ?;',
    [id]
  );
};

export default {
  writeLeadManager,
  findLead,
};
