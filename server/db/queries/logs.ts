import type { Log } from '../../types/index';
import { Query } from '../query';

//API calls
const all = (): Promise<Log[]> =>
  Query<Log[]>(/* sql */ `
		SELECT
			*
		FROM
			sd_activity_logs;
	`);

export default { all };
