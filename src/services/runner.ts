import { runnerDTO } from '@/utils/types';
import baseService from './base';

const createRunner = async (runnerDTO: runnerDTO) => {
  const runner = runnerDTO;
  return await baseService.post(`/api/protected/runners/`, runner);
};

export default { createRunner };
