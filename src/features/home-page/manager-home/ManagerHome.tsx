import { Link } from 'react-router-dom';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import {
  allBackgroundKeys,
  backgroundMap,
  characterKeysMap,
  ECharacter,
} from '../../../context/settings/settingsProvider.utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import { AuthContext } from '@/context/auth/AuthProvider';
import { tiles } from './ManagerHome.utils';

const SiteHome: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   * This will set the background to a random card if there are no favorites
   */
  const { settingsState, setSettingsState } = useContext(SettingsContext);
  const { authState } = useContext(AuthContext);
  const [background, setBackground] = useState<string>(
    settingsState.currentPageBackground
  );

  useEffect(() => {
    if (settingsState.favoriteCharacters.length === 0) {
      const randomIndex = Math.floor(Math.random() * allBackgroundKeys.length);
      const randomBackground = allBackgroundKeys[randomIndex];
      setBackground(randomBackground);
    } else {
      const tempArray: string[] = [];
      settingsState.favoriteCharacters.forEach((character) => {
        const enumChar = character as ECharacter;
        console.log(`enumChar: ${enumChar}`);
        if (characterKeysMap[enumChar]) {
          tempArray.push(...characterKeysMap[enumChar]);
        }

        console.log(`tempArray: ${tempArray}`);

        const randomIndex = Math.floor(Math.random() * tempArray.length);
        const randomBackground = tempArray[randomIndex];
        setBackground(randomBackground);
      });
    }
  }, []);

  // Use the background updater
  useBackgroundUpdater({
    backgroundKey: background,
    backgroundMap,
    setSettingsState,
  });
  return (
    <TransitionWrapper newBackgroundImage={backgroundMap[background]}>
      <div className="home-page transition-base">
        <div className="title-container-manager">
          {authState.managerData?.username ? (
            <>
              <div className="home-title">Welcome back </div>
              <div className="home-title-2">
                {authState.managerData?.username}
              </div>
            </>
          ) : (
            <div className="home-title-2">Welcome back!</div>
          )}
        </div>
        <div className="manager-home-cards">
          {tiles.map((tile) => (
            <Link to={tile.href} className="clickable-card">
              <div className="card-title">{tile.title}</div>
              <div className="card-text">
                <p>{tile.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default SiteHome;
