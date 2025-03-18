import { NextFunction, Request, Response } from 'express';
import db from '../../db';
import { generateUUID } from 'server/utils/functions.utils';

export const createRunner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const runner_name = req.body.runner_name;
  const runner_id = generateUUID();
  try {
    const result = await db.runners.createRunner(runner_id, runner_name);

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
