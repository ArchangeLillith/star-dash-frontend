import { ResultSetHeader } from 'mysql2';
import { QueryMetadata } from '../query';
import { UUID } from 'server/types';

const createRunner = (
  runner_id: UUID,
  runner_name: string
): Promise<ResultSetHeader> => {
  return QueryMetadata(
    /* sql */ `
    INSERT INTO sd_runners (runner_id, runner_name)
    VALUES (?, ?);
  `,
    [runner_id, runner_name]
  );
};

export default { createRunner };
