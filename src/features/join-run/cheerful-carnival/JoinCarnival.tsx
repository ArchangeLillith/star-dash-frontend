import { Link } from 'react-router-dom';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';
import TeamFields from '@/components/TeamFields';
import Input from '@/components/Input';
import {
  ETeamNames,
  InitializeCarnivalState,
  teamParentMap,
  TEXT_INPUT_SETTINGS,
} from '@/utils/variables';
import { CarnivalFormState } from '@/utils/state-types';

const JoinCarnival: React.FC = () => {
  const [formStateCarnival, setFormStateCarnival] = useState<CarnivalFormState>(
    InitializeCarnivalState
  );
  const { setSettingsState } = useContext(SettingsContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSettingsState((prev) => ({
        ...prev,
        currentPageBackground: backgroundMap['carnival'],
      }));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const registerFiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.carnival}>
      <div className="mode-btn">
        <Link to="/marathon">Let's have a Marathon!</Link>
      </div>
      <div className="join-run-page-carnival">
        <form className="filler-registration-form">
          <div className="form-title">Filler Registration</div>
          <div className="top-content">
            <div className="manager-container">
              <label className="banner" htmlFor="manager-input">
                Manager Name
              </label>
              <Input
                id="manager-input"
                className="input"
                placeholder="Your manager..."
                value={formStateCarnival.leadManager}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                stateKey={'leadManager'}
                setState={setFormStateCarnival}
              />
            </div>
            <div className="manager-container">
              {/* //Refactor add a tooltip here as to why we need this */}
              <label className="banner" htmlFor="discord-input">
                Discord Name
              </label>
              <Input
                id="discord-input"
                className="input"
                placeholder="Your Discord..."
                value={formStateCarnival.filler}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                stateKey={'filler'}
                setState={setFormStateCarnival}
              />
            </div>
          </div>

          <div className="team-content">
            {[
              ETeamNames.FillTeam,
              ETeamNames.HealTeam,
              ETeamNames.Sb1Team,
              ETeamNames.Sb2Team,
            ].map((team, index) => (
              <div
                role="group"
                aria-labelledby="fill-team-label"
                className="team-container"
                key={index + team[index]}
              >
                <div className="banner-background">
                  <div className="banner">{team}</div>
                </div>
                <div className="input-container">
                  <TeamFields
                    state={formStateCarnival}
                    setState={setFormStateCarnival}
                    parentStateKey={
                      teamParentMap[team] as keyof CarnivalFormState
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="submit-btn" onClick={registerFiller}>
            Submit!
          </button>
        </form>
        <h2 className="desktop-title">Filler Registration</h2>
      </div>
    </TransitionWrapper>
  );
};

export default JoinCarnival;
