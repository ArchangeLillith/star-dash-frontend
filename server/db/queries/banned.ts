import type { ManagersTable } from '../../types/db.types';
import { Query } from '../query';

const findBannedById = (id: string): Promise<ManagersTable[]> =>
  Query<ManagersTable[]>(
    /* sql */ `
			SELECT
				*
			FROM
				sd_banned_managers
			WHERE
				id = ?;
		`,
    [id]
  );

const findBannedByUsername = (username: string): Promise<ManagersTable[]> =>
  Query<ManagersTable[]>(
    /* sql */ `
			SELECT
				*
			FROM
				sd_banned_managers
			WHERE
				username = ?
		`,
    [username]
  );

export default { findBannedById, findBannedByUsername };
