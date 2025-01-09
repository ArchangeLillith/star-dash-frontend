import { useContext } from 'react';

import TransitionWrapper from '../../../components/TransitionWrapper';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/settings.utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

const AuthHelp = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'authHelp',
    backgroundMap,
    setSettingsState,
  });

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.authHelp}>
      <h1>AuthHelp component rendered</h1>
    </TransitionWrapper>
  );
};

export default AuthHelp;
