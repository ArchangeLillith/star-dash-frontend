import { useContext, useState } from 'react';
import TransitionWrapper from '../../components/TransitionWrapper';
import { SettingsContext } from '../../context/settings/SettingsProvider';
import { backgroundMap } from '../../context/settings/settingsProvider.utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import Input from '@/components/Input';
import { TEXT_INPUT_SETTINGS } from '@/utils/variables';
import { JoinRunFormState, InitializeJoinRun } from './JoinRun.utils';
import EventSelect from '@/components/select/EventSelect';
import { EventsContext } from '@/context/events/EventsProvider';

const JoinRun = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  const { eventsState } = useContext(EventsContext);
  const [formStateJoinRun, setFormStateJoinRun] =
    useState<JoinRunFormState>(InitializeJoinRun);

  useBackgroundUpdater({
    backgroundKey: 'joinRun',
    backgroundMap,
    setSettingsState,
  });

  const submit = () => {};

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.joinRun}>
      <div className="transition-base join-run">
        <form className="form-container">
          <div className="form-title">Join Existing Run</div>
          <div className="input-card">
            <label htmlFor="manager">Your Name</label>
            <Input
              id="manager"
              className="input"
              value={formStateJoinRun.manager}
              setState={setFormStateJoinRun}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'manager'}
            />
          </div>
          <div className="input-card">
            <label htmlFor="leadManager">Lead Manager</label>
            <Input
              id="leadManager"
              className="input"
              value={formStateJoinRun.leadManager}
              setState={setFormStateJoinRun}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'leadManager'}
            />
          </div>
          <div className="input-card">
            <label htmlFor="runPassword">Run Password</label>
            <Input
              id="runPassword"
              className="input"
              value={formStateJoinRun.runPassword}
              setState={setFormStateJoinRun}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'runPassword'}
              type="password"
            />
          </div>
          <div className="input-card">
            <label htmlFor="event">Event</label>
            <EventSelect
              value={formStateJoinRun.event.event_name}
              state={formStateJoinRun}
              options={eventsState.allEvents}
              stateKey="event"
              setState={setFormStateJoinRun}
              defaultOption="Choose your event..."
            />
          </div>
          <button className="submit-btn" onClick={submit}>
            Join!
          </button>
        </form>
        <div className="desktop-title join-run">Join an Existing Run</div>
      </div>
    </TransitionWrapper>
  );
};

export default JoinRun;
