import baseService from './base';

const getEvents = async () => {
  return await baseService.get(`/api/events`);
};

export default { getEvents };
