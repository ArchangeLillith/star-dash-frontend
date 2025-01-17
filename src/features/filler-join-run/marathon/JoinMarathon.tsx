import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/settingsProvider.utils';
import Input from '../../../components/Input';

import { TEXT_INPUT_SETTINGS } from '../../../utils/variables';
import React from 'react';
import TeamFields from '@/components/TeamFields';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import ToggleableTeamPanel from '@/components/ToggalableTeamPanel';
import {
  MarathonFormState,
  InitializeMarathonState,
} from './JoinMarathon.types';

import EventSelect from '@/components/select/EventSelect';
import { EventsContext } from '@/context/events/EventsProvider';

const JoinMarathon: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  const { eventsState } = useContext(EventsContext);
  useBackgroundUpdater({
    backgroundKey: 'marathon',
    backgroundMap,
    setSettingsState,
  });

  const [encoreShow, setEncoreShow] = useState(false);
  const [formStateMarathon, setFormStateMarathon] = useState<MarathonFormState>(
    InitializeMarathonState
  );

  const registerFiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(formStateMarathon.encoreTeam?.isv1);
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.marathon}>
      <div className="transition-base marathon">
        <form className="form-container">
          <div className="form-title">Filler Registration</div>
          <div className="top-content">
            <div className="input-card">
              <label className="banner" htmlFor="manager-input">
                Event
              </label>
              <EventSelect
                options={eventsState.carnivalEvents}
                setState={setFormStateMarathon}
                state={formStateMarathon}
                stateKey="event"
                value={formStateMarathon.event}
              />
            </div>
            <div className="input-card">
              <label className="banner" htmlFor="manager-input">
                Manager Name
              </label>
              <Input
                id="manager-input"
                className="input"
                placeholder="Your manager..."
                value={formStateMarathon.leadManager}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                stateKey={'leadManager'}
                type="text"
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
                value={formStateMarathon.filler}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                placeholder="Your Discord..."
                type="text"
                stateKey={'filler'}
              />
            </div>
          </div>

          <div className="bottom-content">
            <div
              role="group"
              aria-labelledby="fill-team-label"
              className="team-container"
            >
              <div className="banner-background">
                <div className="banner">Fill Team</div>
              </div>

              <TeamFields
                state={formStateMarathon}
                setState={setFormStateMarathon}
                parentStateKey="fillTeam"
              />

              <ToggleableTeamPanel
                title="Encore Team"
                stateKey="encoreTeam"
                classname="toggle-wrapper"
                formState={formStateMarathon}
                setFormState={setFormStateMarathon}
                state={encoreShow}
                setState={setEncoreShow}
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
        <Link to="/carnival">Let's go to a Carnival</Link>
        <IoMdArrowRoundForward size="22px" />
      </div>
    </TransitionWrapper>
  );
};

export default JoinMarathon;
