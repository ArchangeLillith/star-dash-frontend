import { useContext, useEffect } from 'react';

import TransitionWrapper from '../../../components/TransitionWrapper';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';

const PublicHelp = () => {
  const { setSettingsState } = useContext(SettingsContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSettingsState((prev) => ({
        ...prev,
        currentPageBackground: backgroundMap['help'],
      }));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.help}>
      <h1>PublicHelp component rendered</h1>
    </TransitionWrapper>
  );
};

export default PublicHelp;
