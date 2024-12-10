import { Team, Teams } from '@/utils/types';
import { SetStateAction } from 'react';

interface TeamInputsProps {
  team: Team;
  teamKey: keyof Teams;
  setTempTeams: React.Dispatch<SetStateAction<Teams[]>>;
  index: number;
}

const TeamInputs: React.FC<TeamInputsProps> = ({
  //Team here is a temp team, not fillerData
  team,
  teamKey,
  setTempTeams,
  index,
}) => {
  /**
   * Updates the tempTeams with the new data
   * @param e - an input cooresponding to one of the teams stats
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stat = e.target.id as keyof Teams;
    const value = parseInt(e.target.value) || 0;
    setTempTeams((prev) => {
      const updatedTeams = [...prev]; // Shallow copy of the array
      updatedTeams[index] = {
        ...updatedTeams[index], // Shallow copy of the Teams object
        [teamKey]: {
          ...updatedTeams[index][teamKey], // Shallow copy of the specific team
          [stat]: value, // Update the stat
        },
      };
      return updatedTeams;
    });
  };

  return (
    <div className="number-container">
      <input
        className="team-number-input"
        value={team.isv1}
        id="isv1"
        onChange={handleChange}
      ></input>{' '}
      |
      <input
        className="team-number-input"
        value={team.isv2}
        id="isv2"
        onChange={handleChange}
      ></input>{' '}
      |
      <input
        className="team-number-input"
        value={team.bp}
        id="bp"
        onChange={handleChange}
      ></input>
      k
    </div>
  );
};

export default TeamInputs;
