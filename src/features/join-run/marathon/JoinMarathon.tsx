import { Link } from 'react-router-dom';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';
import Input from '../../../components/Input';
import { MarathonFormState } from '../../../utils/state-types';
import {
  InitializeMarathonState,
  TEXT_INPUT_SETTINGS,
} from '../../../utils/variables';
import React from 'react';
import TeamFields from '@/components/TeamFields';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

const JoinMarathon: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'createRun',
    backgroundMap,
    setSettingsState,
  });

  const [formStateMarathon, setFormStateMarathon] = useState<MarathonFormState>(
    InitializeMarathonState
  );

  const registerFiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.marathon}>
      <div className="mode-btn">
        <Link to="/carnival"> Let's go to a Carnival!</Link>
      </div>
      <div className="join-run-page-marathon">
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
                value={formStateMarathon.leadManager}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                stateKey={'leadManager'}
                placeholder="Your manager..."
                type="text"
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
                value={formStateMarathon.filler}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                placeholder="Your Discord..."
                type="text"
                stateKey={'filler'}
              />
            </div>
          </div>

          <div className="team-content">
            <div
              role="group"
              aria-labelledby="fill-team-label"
              className="team-container"
            >
              <div className="banner">Fill Team</div>
              <div className="input-container">
                <TeamFields
                  state={formStateMarathon}
                  setState={setFormStateMarathon}
                  parentStateKey="fillTeam"
                />
              </div>
            </div>
            {/**  Encore when we need it!! Already in the state*************
             * <div
              role="group"
              aria-labelledby="fill-team-label"
              className="team-container"
            >
              <div className="banner">Fill Team</div>
              <div className="input-container">
                <TeamFields
                  state={formStateMarathon}
                  setState={setFormStateMarathon}
                  parentStateKey="fillTeam"
                />
              </div>
            </div> */}
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

export default JoinMarathon;
