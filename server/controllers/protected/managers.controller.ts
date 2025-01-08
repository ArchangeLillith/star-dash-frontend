import { NextFunction, Request, Response } from 'express';
import db from '../../db';
import { UUID } from 'server/types';

export const getManagerEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`Hit manager events controller`);
  const id = req.params.id as UUID;
  try {
    const result = await db.managers.eventsById(id);
    console.log(`RESULT from manager events controller:`, result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
