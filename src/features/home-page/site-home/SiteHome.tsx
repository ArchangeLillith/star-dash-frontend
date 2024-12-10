import { Link } from 'react-router-dom';
import { tiles } from './utils';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

const SiteHome: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'home',
    backgroundMap,
    setSettingsState,
  });

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.home}>
      <div className="home-page transition-base">
        <div className="title-container">
          <div className="home-title">Welcome to </div>
          <div className="home-title-2">StarDash!</div>
        </div>
        <div className="form-container">
          <div className="form-title">Welcome</div>
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
