import { ETeamTypes } from '@/utils/types';
import { UUID } from '.';

export type RunnerTeamDTO = {
  team_id: UUID;
  team_type: ETeamTypes;
  isv1: number;
  isv2: number;
  bp: number;
  runner_id: UUID;
};

export type RunDTO = {
  run_id: UUID;
  lead_manager: UUID;
  runner_id: UUID;
  event_id: UUID;
};
