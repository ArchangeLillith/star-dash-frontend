import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useEffect, useMemo, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';
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
import Select from '@/components/Select';
import useFetchData from '@/hooks/useFetchData';

const JoinMarathon: React.FC = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'marathon',
    backgroundMap,
    setSettingsState,
  });
  const [events, setEvents] = useState<eventType[]>([]);
  const [eventNames, setEventNames] = useState<string[]>([]);
  const [encoreShow, setEncoreShow] = useState(false);
  const [formStateMarathon, setFormStateMarathon] = useState<MarathonFormState>(
    InitializeMarathonState
  );

  type eventType = {
    event_id: string;
    event_name: string;
    event_type: 'M' | 'C';
  };

  const registerFiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(formStateMarathon.encoreTeam?.isv1);
  };
  const fetchConfigs = useMemo(
    () => [{ key: 'events', url: '/api/events' }],
    []
  );
  type FetchDataResponse<T = Record<string, any>> = T;

  const { data, loading, error } =
    useFetchData<FetchDataResponse>(fetchConfigs);

  useEffect(() => {
    if (!data || !data.events) return;
    console.log(`DAT`, data);
    const { events } = data;
    // Update state based on fetched data
    setEvents(events);
    setEventNames(
      events
        .filter((event: eventType) => event.event_type === 'M')
        .map((event: eventType) => event.event_name)
    );
  }, [data]); // Run effect when data changes
  if (loading) <p>Loadig....</p>;
  if (error) <p>error....</p>;
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

              <Select
                options={eventNames}
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
