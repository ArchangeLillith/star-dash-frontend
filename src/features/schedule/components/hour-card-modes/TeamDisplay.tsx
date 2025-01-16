import { TeamsPerHour } from '@/utils/types';
import { SetStateAction } from 'react';

interface FillerSelectionProps {
  teamsPerHour: TeamsPerHour;
  setTeamsPerHour: React.Dispatch<SetStateAction<TeamsPerHour>>;
  hour: string;
}
const TeamDisplay: React.FC<FillerSelectionProps> = ({
  teamsPerHour,
  setTeamsPerHour,
  hour,
}) => {
  const resetTeam = () => {
    setTeamsPerHour((prev) => ({ ...prev, [hour]: [] }));
  };
  console.log(`teams per hour 1:`, teamsPerHour['hour-1']);
  return (
    <>
      {teamsPerHour[hour].map((filler) => (
        <div className="team-card" key={`team-card-${filler.fillerName}`}>
          <div>{filler.fillerName}</div>
          {/* How do we index the Enum at this to display the nicely formatted team name */}
          <div>{[teamsPerHour[hour][0].teamName]}</div>
        </div>
      ))}
      <div className="bottom-row">
        <div className="average-bp">Average BP: 155k</div>
        <button className="submit-btn" onClick={resetTeam}>
          Reselect Team
        </button>
      </div>
    </>
  );
};

export default TeamDisplay;
