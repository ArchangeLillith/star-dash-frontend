import Modal from '@/components/Modal';
import { Filler, Teams } from '@/utils/types';
import { teamParentMap } from '@/utils/variables';
import { Diff } from '../../RunData.utils';
import { SetStateAction } from 'react';

interface SubmitModalProps {
  difference: Diff[];
  fillerData: Filler[];
  tempTeams: Teams[];
  setShow: React.Dispatch<SetStateAction<boolean>>;
  confirmSubmit: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({
  difference,
  fillerData,
  tempTeams,
  setShow,
  confirmSubmit,
}) => {
  const parseDiff = (diff: Diff) => {
    const pathParts = diff.path.split('.');
    const match = pathParts[0].match(/^\[(\d+)\]/);
    const index = parseInt(match?.[1] || '0', 10);
    const team = pathParts[2] as keyof Teams;
    const teamMapIndex = Object.values(teamParentMap).indexOf(team);
    const displayTeamName = Object.keys(teamParentMap)[teamMapIndex];
    return { index, team, displayTeamName };
  };

  const renderTeamComparison = (index: number, team: keyof Teams) => (
    <div className="team-container">
      <div>{fillerData[index].teams[team].isv1}</div>
      <div>{fillerData[index].teams[team].isv2}</div>
      <div>{fillerData[index].teams[team].bp}k</div>
    </div>
  );

  return (
    <Modal>
      <div className="scrollable-container">
        {difference.length > 0 ? (
          <>
            <p>Unsaved changes detected:</p>
            {difference.map((diff: Diff, i: number) => {
              const { index, team, displayTeamName } = parseDiff(diff);
              return (
                <div key={i + team} className="modal-container">
                  <div className="filler-name">{fillerData[index].name}</div>
                  <div>{displayTeamName}</div>
                  {renderTeamComparison(index, team)}
                  <div>↓</div>
                  <div className="team-container">
                    <div>{tempTeams[index][team].isv1}</div>
                    <div>{tempTeams[index][team].isv2}</div>
                    <div>{tempTeams[index][team].bp}k</div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <p>No unsaved changes</p>
        )}
      </div>
      <button className="submit-btn" onClick={confirmSubmit}>
        Save
      </button>
      <button className="submit-btn" onClick={() => setShow(false)}>
        Edit More
      </button>
    </Modal>
  );
};

export default SubmitModal;
