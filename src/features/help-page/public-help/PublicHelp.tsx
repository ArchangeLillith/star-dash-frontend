import { useContext, useEffect } from 'react';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/settingsProvider.utils';
import Accordian from '../components/Accordian';
import TopMessage from '../components/TopMessage';

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
      <div className="transition-base pub-help">
        <div className="scrollable-container">
          <div className="inner-scroll-container">
            <TopMessage />
            <Accordian />
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default PublicHelp;
