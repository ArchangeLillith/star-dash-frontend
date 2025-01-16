import baseService from './base';
import { SettingsState } from '@/context/settings/settingsProvider.utils';
import { UUID } from 'server/types';

const getSettings = async (userId: UUID) => {
  const managerSettingsReturn = await baseService.get(
    `/api/protected/managers/settings/${userId}`
  );
  return managerSettingsReturn[0].settings;
};

const updateSettings = async (userId: UUID, settings: SettingsState) => {
  return await baseService.put(`/api/protected/managers/settings/${userId}`, {
    settings,
  });
};

export default { getSettings, updateSettings };
