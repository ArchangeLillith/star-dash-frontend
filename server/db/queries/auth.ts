import { AuthTable } from 'server/types/db.types';
import { Query } from '../query';
import { UUID } from 'server/types';

//Authorization calls
const oneById = (id: UUID): Promise<AuthTable[]> =>
  Query<AuthTable[]>(
    /* sql */ `
      SELECT *
      FROM
        sd_auth
      WHERE
        manager_id = ?
    `,
    [id]
  );

export default {
  oneById,
};
