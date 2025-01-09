import React, { createContext, useState } from 'react';
import {
  DefaultSettings,
  SettingProviderProps,
  SettingsContextType,
  SettingsState,
} from './settings.utils';

/**
 * Settings context to allow other components to pull from it no matter how nested
 */
export const SettingsContext = createContext<SettingsContextType>({
  settingsState: DefaultSettings,
  setSettingsState: () => {},
  updateSettings: () => {},
});

const SettingsProvider: React.FC<SettingProviderProps> = ({ children }) => {
  const [settingsState, setSettingsState] =
    useState<SettingsState>(DefaultSettings);
  console.log(`Setting providere entered!!!!!!!!!!!!!!!!!!!!!`);

  const updateSettings = (newSettings: SettingsState) => {
    setSettingsState(newSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settingsState,
        setSettingsState,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
