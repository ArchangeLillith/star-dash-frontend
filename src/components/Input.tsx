import { Dispatch, SetStateAction } from 'react';
import {
  handleStateChange,
  handleStateChangeSecondLayer,
} from '../features/create-run/utils';
import {
  TEAM_NUMBER_INPUT_SETTINGS,
  TEXT_INPUT_SETTINGS,
} from '../utils/variables';

interface InputProps<T> {
  id: string;
  className: string;
  placeholder?: string;
  type?: string;
  value: string | number | undefined;
  valueRange?: typeof TEAM_NUMBER_INPUT_SETTINGS;
  maxLength?: number;
  parentStateKey?: keyof T;
  stateKey: keyof T;
  setState: Dispatch<SetStateAction<T>>;
  disabled?: boolean;
  'aria-label'?: string;
  regex?: RegExp;
}

const Input = <T,>({
  id,
  className,
  placeholder = '',
  type = 'text',
  value,
  valueRange,
  parentStateKey,
  stateKey,
  setState,
  disabled = false,
  'aria-label': ariaLabel,
}: InputProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue =
      type === 'number' ? Number(e.target.value) : e.target.value;

    //If we need a second layer
    if (parentStateKey) {
      handleStateChangeSecondLayer(
        stateKey,
        parentStateKey,
        setState
      )(parsedValue);
    } else {
      //otherwise we have no regex and we're only top layer changes
      handleStateChange(stateKey, setState)(parsedValue);
    }
  };
  return (
    <input
      id={id}
      type={type}
      value={value}
      min={valueRange?.MIN_LENGTH}
      max={valueRange?.MAX_LENGTH}
      maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
      placeholder={placeholder}
      onChange={handleChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel || id}
    />
  );
};

export default Input;
