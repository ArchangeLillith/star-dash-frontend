// Third-party imports
import { useContext, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';

// Component imports
import TransitionWrapper from '@/components/TransitionWrapper';
import PageControls from './components/PageControls';
import FillerSelection from './components/hour-card-modes/FillerSelection';
import TeamSelection from './components/hour-card-modes/TeamSelection';
import TeamDisplay from './components/hour-card-modes/TeamDisplay';

// Context imports
import { SettingsContext } from '@/context/settings/SettingsProvider';
import { EventsContext } from '@/context/events/EventsProvider';

// Hook imports
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

// Utility imports
import {
  areFillersComplete,
  HourToFillers,
  isTeamFullySelected,
} from './Schedule.utils';
import { backgroundMap } from '@/context/settings/settingsProvider.utils';
import { TeamsPerHour } from '@/utils/types';

const Schedule = () => {
  const { eventsState } = useContext(EventsContext);
  const { setSettingsState } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedHours, setPaginatedHours] = useState<number[]>([]);
  const [showControls, setShowControls] = useState<boolean>(false);

  const [fillersPerHour, setFillersPerHour] = useState<HourToFillers>(
    eventsState.selectedEvent.fillersPerHour
  );
  const [teamsPerHour, setTeamsPerHour] = useState<TeamsPerHour>(
    eventsState.selectedEvent.teamsPerHour
  );

  useBackgroundUpdater({
    backgroundKey: 'schedule',
    backgroundMap,
    setSettingsState,
  });

  const renderHourCards = (hour: number) => {
    if (isTeamFullySelected(hour, teamsPerHour)) {
      return (
        <div className="team-container">
          <TeamDisplay
            teamsPerHour={teamsPerHour}
            setTeamsPerHour={setTeamsPerHour}
            hour={`hour-${hour}`}
          />
        </div>
      );
    }
    return (
      <div className="select-container">
        <FillerSelection
          hour={`hour-${hour}`}
          fillers={eventsState.selectedEvent.fillersAvaliable}
          fillersPerHour={fillersPerHour}
          setFillersPerHour={setFillersPerHour}
        />
        {areFillersComplete(hour, fillersPerHour) && (
          <TeamSelection
            hour={`hour-${hour}`}
            setTeamsPerHour={setTeamsPerHour}
            fillersPerHour={fillersPerHour}
          />
        )}
      </div>
    );
  };

  // const [hourlyNotes, setHourlyNotes] = useState<Record<string, string>>({});

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.schedule}>
      <div className="transition-base schedule">
        <div className="scrollable-container">
          <div className="form-title">Schedule</div>
          <button
            className="control-toggle"
            onClick={() => setShowControls((prev) => !prev)}
          >
            <IoIosSettings className="settings-icon" />
          </button>

          <PageControls
            showControls={showControls}
            setCurrentPage={setCurrentPage}
            setPaginatedHours={setPaginatedHours}
            currentPage={currentPage}
          />

          {/* loop hour per page times */}
          <div className="schedule-container">
            {paginatedHours.map((hour) => (
              <div className="hour-container" key={`hour-container-${hour}`}>
                <div className="hour-title">Hour {hour}</div>
                {/* Get the hour cards based on the state they're in! */}
                {renderHourCards(hour)}
              </div>
            ))}
            <div className="notes-toggle">
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="desktop-title schedule-1">Schedule for</div>
        <div className="desktop-title schedule-2">
          {eventsState.selectedEvent.event_name}
        </div>
        <div className="desktop-title schedule-3">
          Lead by: {eventsState.selectedEvent.lead_name}
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Schedule;
