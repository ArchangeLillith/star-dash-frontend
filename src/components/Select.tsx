import { Dispatch, SetStateAction } from 'react';
import { handleStateChange } from '../features/create-run/utils';

interface SelectProps<T> {
  options: string[];
  stateKey: keyof T;
  state: T;
  value: string;
  setState: Dispatch<SetStateAction<T>>;
  defaultOption?: string;
}

const Select = <T,>({
  options,
  setState,
  state,
  stateKey,
  defaultOption,
}: SelectProps<T>) => {
  return (
    <select
      className="select"
      onChange={(e) => handleStateChange(stateKey, setState)(e.target.value)}
      value={state[stateKey] as string}
    >
      {defaultOption && <option value="">{defaultOption}</option>}
      {options.map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
