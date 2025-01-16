import { ResultSetHeader } from 'mysql2';
import { QueryMetadata } from '../query';
import { RunDTO } from 'server/types/dataTransferObjects';

const createNewRun = ({
  run_id,
  lead_manager,
  runner_id,
  event_id,
}: RunDTO): Promise<ResultSetHeader> => {
  return QueryMetadata(
    /* sql */ `
    INSERT INTO sd_runs (run_id, lead_manager, runner_id, event_id)
    VALUES (?, ?,?,?);
  `,
    [run_id, lead_manager, runner_id, event_id]
  );
};

export default { createNewRun };
