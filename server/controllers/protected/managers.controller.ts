import { NextFunction, Request, Response } from 'express';
import db from '../../db';
import { UUID } from 'server/types';

export const getManagerEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = req.params.id as UUID;
  try {
    const result = await db.managers.eventsById(id);
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
  const id = req.params.id as UUID;
  try {
    const result = await db.managers.settingsById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const writeLeadManager = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { manager_id, event_id } = req.body;
  try {
    const result = await db.leadManagers.writeLeadManager(manager_id, event_id);
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
  const id = req.params.id as UUID;
  const settings = req.body.settings;

  try {
    const result = await db.managers.updateSettings(id, settings);
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
    const result = await db.leadManagers.findLead(id);
    console.log(`result`, result);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
