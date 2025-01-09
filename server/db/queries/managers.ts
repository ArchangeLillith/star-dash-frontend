import type { ResultSetHeader } from 'mysql2';
import {
  EventQueryResult,
  ManagersTable,
  SettingsTable,
} from 'server/types/db.types';
import { Query, QueryMetadata } from '../query';
import { UUID } from 'server/types';
import { SettingsState } from '@/context/settings/settings.utils';

//API calls
const returnAll = (): Promise<ManagersTable> =>
  Query<ManagersTable>(/* sql */ 'SELECT * FROM sd_managers;');

/**
 * @param id - manager_id as string
 * @returns an object of {}
 */

const oneById = async (id: UUID): Promise<ManagersTable[]> =>
  Query<ManagersTable[]>(
    /* sql */ `
			SELECT * FROM sd_managers WHERE manager_id = ?
		`,
    [id]
  );

const eventsById = async (id: UUID): Promise<EventQueryResult[]> =>
  Query<EventQueryResult[]>(
    `SELECT e.event_name
    FROM sd_events e
    JOIN sd_lead_managers lm ON e.event_id = lm.event_id
    WHERE lm.manager_id = ?;`,
    [id]
  );
//Authorization calls
const oneByUsername = (username: string): Promise<ManagersTable[]> =>
  Query<ManagersTable[]>(
    /* sql */ `
			SELECT *
			FROM
				sd_managers
			WHERE
				manager_name = ?
		`,
    [username]
  );

const insertManager = (values: {
  id: UUID;
  username: string;
}): Promise<ResultSetHeader> => {
  const { id, username } = values;
  return QueryMetadata(
    /* sql */ 'INSERT INTO sd_managers (manager_id, manager_name) VALUES (?,?);',
    [id, username]
  );
};

const settingsById = (id: UUID): Promise<SettingsTable> => {
  return Query<SettingsTable>(
    /* sql */ `SELECT * FROM sd_settings WHERE manager_id = ?;`,
    [id]
  );
};
const updateSettings = (values: {
  id: UUID;
  settings: SettingsState; //This type lives in the frontend
}): Promise<ResultSetHeader> => {
  const { id, settings } = values;
  return QueryMetadata(
    /* sql */ 'INSERT INTO sd_settings (manager_id, settings) VALUES (?,?);',
    [id, settings]
  );
};

const insertPassword = (values: {
  id: string;
  password: string;
}): Promise<ResultSetHeader> => {
  const { id, password } = values;
  return QueryMetadata(
    /* sql */ 'INSERT INTO sd_auth (manager_id, password) VALUES (?,?);',
    [id, password]
  );
};

const ban = (
  id: string,
  email: string,
  username: string
): Promise<ResultSetHeader> => {
  console.log(`ID`, id, username);
  return QueryMetadata(
    /* sql */ 'INSERT INTO kf_banned_authors (id, username) VALUES (?,?);',
    [id, username]
  );
};

//DELETE a pattern
const destroy = (id: string): Promise<ResultSetHeader> =>
  QueryMetadata(/* sql */ 'DELETE FROM sd_managers WHERE id = ?;', [id]);

export default {
  returnAll,
  updateSettings,
  eventsById,
  oneById,
  oneByUsername,
  insertManager,
  insertPassword,
  ban,
  destroy,
  settingsById,
};
