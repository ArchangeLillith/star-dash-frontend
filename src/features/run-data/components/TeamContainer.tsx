import { SetStateAction, useState } from 'react';
import TeamInputs from './TeamInputs';
import { Teams, Filler } from '@/utils/types';
import { compareFillersAndTeams, createTempTeams, Diff } from '../utils';
import { DummyFillerData } from '@/utils/variables';
import SubmitModal from './modals/SubmitModal';
import CancelModal from './modals/CancelModal';

const teamKeys: (keyof Teams)[] = ['fillTeam', 'healTeam', 'sb1', 'sb2'];

interface TeamContainerrops {
  index: number;
  filler: Filler;
  fillerData: Filler[];
  setFillerData: React.Dispatch<SetStateAction<Filler[]>>;
  tempTeams: Teams[];
  setTempTeams: React.Dispatch<SetStateAction<Teams[]>>;
  editState: boolean;
  setEditState: React.Dispatch<SetStateAction<boolean>>;
}

const TeamContainer: React.FC<TeamContainerrops> = ({
  index,
  filler,
  fillerData,
  setFillerData,
  editState,
  setEditState,
  tempTeams,
  setTempTeams,
}) => {
  /** Modal handler state for submission of the data */
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  /** Modal handler state for the cancel */
  const [showDiscardModal, setShowDiscardModal] = useState<boolean>(false);
  /** State to collect the differences in fillerData (database data) and the tempTeams(the edited data the user interacts with) */
  const [difference, setDifference] = useState<Diff[]>([]);

  /** Creates the diff and sets that state, then displays the modal of changes to accept or decline */
  const handleSubmit = () => {
    const diff = compareFillersAndTeams(fillerData, tempTeams);
    if (diff.length === 0) {
      setEditState(!editState);
      return;
    }
    setDifference(diff);
    setShowSubmitModal(true);
  };

  const handleDiscard = () => {
    if (difference.length === 0) {
      setEditState(!editState);
      return;
    }
    setShowDiscardModal(true);
  };

  //Refactor this is where we'll trigger DB write
  /** Confirmation of changes, this triggers a datbase write as the user has accepted all changes and sets fillerData(the state aligned with the database) to the new changes */
  const confirmSubmit = () => {
    setShowSubmitModal(false);
    setFillerData((prev) => {
      return prev.map((filler, index) => ({
        ...filler,
        teams: tempTeams[index],
      }));
    });
    setDifference([]);
    setEditState(!editState);
  };

  /** Confirmation of discarding changes, calls to reset the tempTeams and closes modal and edit states  */
  const confirmCancel = () => {
    setTempTeams(createTempTeams(DummyFillerData));
    setShowDiscardModal(false);
    setDifference([]);
    setEditState(false);
  };

  const renderTeam = (teamKey: keyof Teams) => (
    <div className="team-row" key={`${filler.name}-${teamKey}`}>
      <div className="team-header">{teamKey}</div>
      {editState ? (
        <TeamInputs
          team={tempTeams[index][teamKey]}
          teamKey={teamKey}
          setTempTeams={setTempTeams}
          index={index}
        />
      ) : (
        <div className="number-container">
          <div className="team-number">{filler.teams[teamKey].isv1}</div> |
          <div className="team-number">{filler.teams[teamKey].isv2}</div> |
          <div className="team-number">{filler.teams[teamKey].bp}k</div>
        </div>
      )}
    </div>
  );

  const renderModal = () => {
    if (showSubmitModal) {
      return (
        <SubmitModal
          fillerData={fillerData}
          tempTeams={tempTeams}
          difference={difference}
          confirmSubmit={confirmSubmit}
          setShow={setShowSubmitModal}
        />
      );
    }
    if (showDiscardModal) {
      return (
        <CancelModal
          confirmCancel={confirmCancel}
          setShow={setShowDiscardModal}
        />
      );
    }
    return null;
  };

  return (
    <div className="team-card">
      <div className="team-list">{teamKeys.map(renderTeam)}</div>
      {renderModal()}
      <div className="button-group">
        {editState ? (
          <>
            <button className="submit-btn green" onClick={handleSubmit}>
              ✔️
            </button>
            <button className="submit-btn" onClick={handleDiscard}>
              ❌
            </button>
          </>
        ) : (
          <button className="submit-btn" onClick={() => setEditState(true)}>
            Edit!
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamContainer;
