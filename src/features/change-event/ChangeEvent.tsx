import { useContext } from 'react';
import TransitionWrapper from '../../components/TransitionWrapper';
import { SettingsContext } from '../../context/settings/SettingsProvider';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import { backgroundMap } from '@/context/settings/settingsProvider.utils';
import { EventsContext } from '@/context/events/EventsProvider';
import { useNavigate } from 'react-router-dom';

const ChangeEvent = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { eventsState } = useContext(EventsContext);
  const { setSettingsState } = useContext(SettingsContext);

  const navigate = useNavigate();
  useBackgroundUpdater({
    backgroundKey: 'changeEvent',
    backgroundMap,
    setSettingsState,
  });

  const createRun = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/create-run');
  };
  const joinRun = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/join-run');
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.changeEvent}>
      <div className="transition-base change-event">
        <form className="form-container">
          {eventsState.activeEvents.length > 0 && (
            <div className="active-events">
              <div className="event-title">Active events:</div>
              <select>
                {eventsState.activeEvents.map((activeEvent) => (
                  <option key={activeEvent.event_id}>
                    {activeEvent.event_name} lead by [dummy leader]
                  </option>
                ))}
              </select>
            </div>
          )}
          {eventsState.archivedEvents.length > 0 && (
            <div className="archived-events">
              <div className="event-title">Archived events:</div>
              <select>
                {eventsState.archivedEvents.map((archivedEvent) => (
                  <option key={archivedEvent.event_id}>
                    {archivedEvent.event_name} lead by [dummy leader]
                  </option>
                ))}
              </select>
            </div>
          )}
          {eventsState.archivedEvents.length === 0 &&
            eventsState.activeEvents.length === 0 && (
              <div className="no-events">
                <div className="event-title">You don't have any runs!</div>
                <div className="button-wrapper">
                  <button className="submit-btn" onClick={createRun}>
                    Make one
                  </button>
                  <button className="submit-btn" onClick={joinRun}>
                    Join an existing one
                  </button>
                </div>
              </div>
            )}
        </form>
        <div className="desktop-title change-event">Pick Your Run!</div>
      </div>
    </TransitionWrapper>
  );
};

export default ChangeEvent;
