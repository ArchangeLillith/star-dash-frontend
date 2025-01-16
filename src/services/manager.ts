import baseService from './base';
import { UUID } from 'server/types';

const leadManagerCheck = async (userId: UUID) => {
  const leadManagerData = await baseService.get(
    `/api/protected/managers/lead/${userId}`
  );
  console.log(`lead manager data from services`, leadManagerData);
  if (leadManagerData.length > 0) return true;
  return false;
};

export default { leadManagerCheck };
