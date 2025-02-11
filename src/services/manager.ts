import baseService from './base';
import { UUID } from 'server/types';

const leadManagerCheck = async (managerId: UUID, eventId: UUID) => {
  const leadManagerData = await baseService.get(
    `/api/protected/lead/${managerId}`
  );
  console.log(`leadmanagerdata`, leadManagerData);
  if (
    leadManagerData.some(
      (entry: { event_id: UUID; manager_id: UUID }) =>
        entry.event_id === eventId
    )
  )
    return true;
  return false;
};

const addLeadManager = async (userId: UUID, eventId: UUID) => {
  const payload = {
    manager_id: userId,
    event_id: eventId,
  };
  const result = await baseService.post(
    `/api/protected/lead/${userId}`,
    payload
  );
  return result;
};

export default { leadManagerCheck, addLeadManager };
