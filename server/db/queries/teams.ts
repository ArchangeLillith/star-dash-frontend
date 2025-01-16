import { ResultSetHeader } from 'mysql2';
import { QueryMetadata } from '../query';
import { UUID } from 'server/types';
import { RunnerTeamDTO } from 'server/types/dataTransferObjects';

// let teamDTO = {
//   team_id,
//   team_type: req.body.team_type,
//   isv1: req.body.isv1,
//   isv2: req.body.isv2,
//   bp: req.body.bp,
//   ...(req.body.runner_id && { runner_id: req.body.runner_id }),
//   ...(req.body.filler_id && { filler_id: req.body.filler_id }),
// };

const createRunnerTeam = ({
  team_id,
  team_type,
  isv1,
  isv2,
  bp,
  runner_id,
}: RunnerTeamDTO): Promise<ResultSetHeader> => {
  console.log(
    `  team_id,
  team_type,
  isv1,
  isv2,
  bp,
  runner_id,`,
    team_id,
    team_type,
    isv1,
    isv2,
    bp,
    runner_id
  );
  return QueryMetadata(
    /* sql */ `
    INSERT INTO sd_teams (team_id, team_type, isv1, isv2, bp, runner_id)
    VALUES (?, ?, ?, ?, ?, ?);
  `,
    [team_id, team_type, isv1, isv2, bp, runner_id]
  );
};
const createFillerTeam = (
  runner_id: UUID,
  runner_name: string
): Promise<ResultSetHeader> => {
  return QueryMetadata(
    /* sql */ `
    INSERT INTO sd_teams (team_id, )
    VALUES (?, ?);
  `,
    [runner_id, runner_name]
  );
};

export default { createRunnerTeam, createFillerTeam };
