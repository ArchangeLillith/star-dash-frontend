import { Filler, Team } from '@/utils/types';
import { SetStateAction } from 'react';

type ChosenTeam = {
  fillerName: string;
  teamName: string;
  team: Team;
};

interface TeamSelectionProps {
  hour: string;
  fillersPerHour: Record<string, Filler[]>;
  setTeamsPerHour: React.Dispatch<SetStateAction<Record<string, ChosenTeam[]>>>;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({
  hour,
  fillersPerHour,
  setTeamsPerHour,
}) => {
  //Will return either a button or a div with found teams depending on internal state, always rendering first with the button so ew don't have to do calcs when no necessary
  const findTeams = () => {
    setTeamsPerHour((prev) => {
      let updated = { ...prev };
      let newTeam = [];
      for (let filler of fillersPerHour[hour]) {
        const fillerName = filler.name;
        const team = filler.teams.fillTeam;
        const teamName = 'fillTeam';
        newTeam.push({ fillerName, team, teamName });
      }
      updated[hour] = newTeam;
      return updated;
    });
  };
  return (
    <button onClick={findTeams} className="submit-btn">
      Find Teams~
    </button>
  );
};

export default TeamSelection;
