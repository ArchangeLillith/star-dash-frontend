import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransitionWrapper from '../../components/TransitionWrapper';
import { SettingsContext } from '../../context/settings/SettingsProvider';
import { EventsContext } from '@/context/events/EventsProvider';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import { backgroundMap } from '@/context/settings/settingsProvider.utils';
import { UUID } from 'server/types';

const ChangeEvent = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { eventsState } = useContext(EventsContext);
  const { setSettingsState } = useContext(SettingsContext);
  const navigate = useNavigate();

  //Hook to change background
  useBackgroundUpdater({
    backgroundKey: 'changeEvent',
    backgroundMap,
    setSettingsState,
  });

  //Navigation handler
  const navigateTo =
    (path: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate(path);
    };

  //Helper for rendering the lists
  const renderEventList = (
    events: { event_id: UUID; event_name: string }[],
    title: string
  ) => (
    <div className="events-list">
      <div className="event-title">{title}</div>
      <select aria-label={title}>
        {events.map((event) => (
          <option key={event.event_id}>
            {event.event_name} lead by [dummy leader]
          </option>
        ))}
      </select>
    </div>
  );

  //Declare render conditions outside
  const hadNoEvents =
    eventsState.activeEvents.length === 0 &&
    eventsState.archivedEvents.length === 0;
  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.changeEvent}>
      <div className="transition-base change-event">
        <form className="form-container">
          {eventsState.activeEvents.length > 0 &&
            renderEventList(eventsState.activeEvents, 'Active Events')}
          {eventsState.archivedEvents.length > 0 &&
            renderEventList(eventsState.archivedEvents, 'Archived Events')}
          {hadNoEvents && (
            <div className="no-events">
              <div className="event-title">You don't have any runs!</div>
              <div className="button-wrapper">
                <button
                  className="submit-btn"
                  onClick={navigateTo('/create-run')}
                >
                  Make one
                </button>
                <button
                  className="submit-btn"
                  onClick={navigateTo('/join-run')}
                >
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
