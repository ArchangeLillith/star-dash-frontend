import { NextFunction, Request, Response } from 'express';
import db from 'server/db';
import { RunDTO } from 'server/types/dataTransferObjects';
import { generateUUID } from 'server/utils/functions.utils';

export const createNewRun = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.body === null) {
    res.json('error');
    throw new Error('error');
  }
  const runDTO: RunDTO = {
    run_id: generateUUID(),
    lead_manager: req.body.lead_manager,
    runner_id: req.body.runner_id,
    event_id: req.body.event_id,
  };

  console.log(`runDTO`, runDTO);
  try {
    const result = await db.runs.createNewRun(runDTO);
    console.log(
      `RESULT from manager events controller, just the runners write without the tea,m:`,
      result
    );
    res.json(runDTO);
  } catch (error) {
    next(error);
  }
};
