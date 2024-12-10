import TransitionWrapper from '@/components/TransitionWrapper';
import { SettingsContext } from '@/context/settings/SettingsProvider';
import { backgroundMap } from '@/context/settings/utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import { Team, Filler } from '@/utils/types';
import { DummyFillerData } from '@/utils/variables';
import { useContext, useState } from 'react';
import FillerSelection from './components/hour-card-modes/FillerSelection';
import TeamSelection from './components/hour-card-modes/TeamSelection';
import TeamDisplay from './components/hour-card-modes/TeamDisplay';
import {
  areFillersComplete,
  initializeHourToFillers,
  initializeTeamsPerHour,
  isTeamFullySelected,
} from './utils';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import PageControls from './components/PageControls';

const Schedule = () => {
  const { setSettingsState } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedHours, setPaginatedHours] = useState<number[]>([]);
  const [showControls, setShowControls] = useState<boolean>(false);

  const fillerDataFromSQL = DummyFillerData;
  const [fillersPerHour, setFillersPerHour] = useState<HourToFillers>(
    initializeHourToFillers()
  );
  const [teamsPerHour, setTeamsPerHour] = useState<
    Record<string, ChosenTeam[]>
  >(initializeTeamsPerHour());
  type HourToFillers = Record<string, Filler[]>;
  type ChosenTeam = {
    fillerName: string;
    teamName: string;
    team: Team;
  };
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
          fillers={fillerDataFromSQL}
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
        <div className="desktop-title schedule">Schedule</div>
      </div>
    </TransitionWrapper>
  );
};

export default Schedule;
