import { NextFunction, Request, Response } from 'express';
import db from '../../db';

export const eventsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`Hit events controleler`);
  try {
    const result = await db.events.all();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
