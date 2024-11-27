import { SetStateAction } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import TeamFields from './TeamFields';

interface ToggleableTeamPanelProps<T> {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  formState: T;
  setFormState: React.Dispatch<SetStateAction<T>>;
  title: string;
  stateKey: string;
  classname: string;
}

const ToggleableTeamPanel = <T extends Record<string, any>>({
  state,
  setState,
  formState,
  setFormState,
  title,
  stateKey,
  classname,
}: ToggleableTeamPanelProps<T>) => {
  const toggleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState((prevState) => !prevState);
  };
  return (
    <>
      <div className={classname}>
        <div className="banner-background">
          <div className="banner">{title}</div>
        </div>
        <button className="toggle-team-button" onClick={toggleShow}>
          {state ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {state && (
        <TeamFields
          state={formState}
          setState={setFormState}
          parentStateKey={stateKey}
        />
      )}
    </>
  );
};

export default ToggleableTeamPanel;
