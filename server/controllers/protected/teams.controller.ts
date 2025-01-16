import { NextFunction, Request, Response } from 'express';
import db from '../../db';
// import { UUID } from 'server/types';
import { generateUUID } from 'server/utils/functions.utils';
import { RunnerTeamDTO } from 'server/types/dataTransferObjects';

export const createTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`req.body for create team controller:`, req.body);
  const team_id = generateUUID();

  let teamDTO: RunnerTeamDTO = {
    team_id,
    team_type: req.body.team_type,
    isv1: req.body.isv1,
    isv2: req.body.isv2,
    bp: req.body.bp,
    ...(req.body.runner_id && { runner_id: req.body.runner_id }),
    ...(req.body.filler_id && { filler_id: req.body.filler_id }),
  };
  try {
    const result = await db.teams.createRunnerTeam(teamDTO);
    console.log(
      `RESULT from manager events controller, just the runners write without the tea,m:`,
      result
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
