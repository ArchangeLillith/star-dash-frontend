import { Link } from 'react-router-dom';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/settings.utils';
import TeamFields from '@/components/TeamFields';
import Input from '@/components/Input';
import { TEXT_INPUT_SETTINGS } from '@/utils/variables';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import ToggleableTeamPanel from '@/components/ToggalableTeamPanel';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {
  CarnivalFormState,
  InitializeCarnivalState,
  ETeamNames,
  teamParentMap,
} from './JoinCarnival.types';

const JoinCarnival: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'carnival',
    backgroundMap,
    setSettingsState,
  });

  const [formStateCarnival, setFormStateCarnival] = useState<CarnivalFormState>(
    InitializeCarnivalState
  );
  const [sb2Show, setSb2Show] = useState(false);
  const registerFiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(formStateCarnival.sb2Team.isv1);
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.carnival}>
      <div className="transition-base carnival">
        <form className="form-container">
          <div className="form-title">Filler Registration</div>
          <div className="top-content">
            <div className="input-card">
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
            <div className="input-card">
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

          <div className="bottom-content">
            {[ETeamNames.FillTeam, ETeamNames.HealTeam, ETeamNames.Sb1Team].map(
              (team, index) => (
                <div
                  role="group"
                  aria-labelledby="fill-team-label"
                  className="team-container"
                  key={index + team[index]}
                >
                  <div className="banner-background">
                    <div className="banner">{team}</div>
                  </div>
                  <TeamFields
                    state={formStateCarnival}
                    setState={setFormStateCarnival}
                    parentStateKey={
                      teamParentMap[team] as keyof CarnivalFormState
                    }
                  />
                </div>
              )
            )}
            <div
              role="group"
              aria-labelledby="fill-team-label"
              className="team-container"
            >
              <ToggleableTeamPanel
                title="SB2 Team"
                stateKey="sb2Team"
                classname="toggle-wrapper"
                formState={formStateCarnival}
                setFormState={setFormStateCarnival}
                state={sb2Show}
                setState={setSb2Show}
              />
            </div>
          </div>
          <button className="submit-btn" onClick={registerFiller}>
            Submit!
          </button>
        </form>
        <div className="desktop-title">Filler Registration</div>
      </div>
      <div className="mode-btn">
        <Link to="/marathon">Let's have a Marathon</Link>
        <IoMdArrowRoundForward size="22px" />
      </div>
    </TransitionWrapper>
  );
};

export default JoinCarnival;
