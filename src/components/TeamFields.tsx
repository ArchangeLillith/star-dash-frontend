import { TeamFormFields, TEAM_NUMBER_INPUT_SETTINGS } from '@/utils/variables';
import Input from './Input';
import { SetStateAction } from 'react';

interface TeamFieldsProps<T> {
  state: T;
  setState: React.Dispatch<SetStateAction<T>>;
  parentStateKey?: keyof T;
}

const TeamFields = <T extends Record<string, any>>({
  state,
  setState,
  parentStateKey,
}: TeamFieldsProps<T>) => {
  return (
    <>
      {TeamFormFields.map(({ id, stateKey, placeholder }) => (
        <Input
          id={id}
          className="input"
          key={id}
          value={state[stateKey as keyof T]} // Correctly access value from state
          valueRange={TEAM_NUMBER_INPUT_SETTINGS}
          type="number"
          stateKey={stateKey as keyof T} // Pass stateKey as keyof T
          setState={setState}
          placeholder={placeholder}
          parentStateKey={parentStateKey || undefined}
        />
      ))}
    </>
  );
};

export default TeamFields;
