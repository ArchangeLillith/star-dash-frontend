import { UUID } from 'server/types';
import baseService from './base';
import { ETeamTypes } from '@/utils/types';

const writeTeam = async (teamDTO: teamDTO) => {
  return await baseService.post(`/api/protected/teams/`, teamDTO);
};

export default { writeTeam };

type teamDTO = {
  runner_id: UUID;
  team_type: ETeamTypes;
  isv1: number;
  isv2: number;
  bp: number;
};
