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

export const getManagerSettings = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`Hit manager events controller`);
  const id = req.params.id as UUID;
  console.log(`ID from manager events controller:`, id);
  try {
    const result = await db.managers.settingsById(id);
    console.log(`RESULT from manager events controller:`, result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
export const updateManagerSettings = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(`Hit manager events controller`);
  const id = req.params.id as UUID;
  const settings = req.body.settings;
  console.log(` SETTINGS from manager events controller:`, settings);
  console.log(`ID from manager events controller:`, id);

  try {
    const result = await db.managers.updateSettings(id, settings);
    console.log(`RESULT from manager events controller:`, result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const checkLeadManagerStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = req.params.id as UUID;
  try {
    const result = await db.managers.findLead(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
