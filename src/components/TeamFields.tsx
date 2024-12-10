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
    <div className="input-container">
      {TeamFormFields.map(({ id, stateKey, placeholder }) => (
        <Input
          id={id}
          className="input"
          key={id}
          value={state[stateKey as keyof T]}
          valueRange={TEAM_NUMBER_INPUT_SETTINGS}
          type="number"
          stateKey={stateKey as keyof T}
          setState={setState}
          placeholder={placeholder}
          parentStateKey={parentStateKey || undefined}
        />
      ))}
    </div>
  );
};

export default TeamFields;
