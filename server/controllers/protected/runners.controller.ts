import { NextFunction, Request, Response } from 'express';
import db from '../../db';
import { generateUUID } from 'server/utils/functions.utils';

export const createRunner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`runners controller:`, req.body);
  const runner_name = req.body.runner_name;
  const runner_id = generateUUID();
  console.log(`runnername`, runner_name);
  try {
    const result = await db.runners.createRunner(runner_id, runner_name);
    console.log(
      `RESULT from manager events controller, just the runners write without the tea,m:`,
      result
    );

    if (result.affectedRows === 0) {
      const error = new Error(" couldn't add for some reason :(");
      next(error);
      throw error;
    }
    res.json(runner_id);
  } catch (error) {
    next(error);
    throw error;
  }
};
