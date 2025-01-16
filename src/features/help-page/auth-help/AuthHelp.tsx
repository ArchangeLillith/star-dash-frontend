import { useContext } from 'react';

import TransitionWrapper from '../../../components/TransitionWrapper';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/settingsProvider.utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

const AuthHelp = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { settingsState, setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'authHelp',
    backgroundMap,
    setSettingsState,
  });

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.authHelp}>
      <h1>AuthHelp component rendered</h1>
      <div>{JSON.stringify(settingsState)}</div>
    </TransitionWrapper>
  );
};

export default AuthHelp;
