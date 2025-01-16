import { Dispatch, SetStateAction, useState } from 'react';
import {} from '../features/create-run/CreateRun.utils';
import {
  TEAM_NUMBER_INPUT_SETTINGS,
  TEXT_INPUT_SETTINGS,
} from '../utils/variables';
import {
  handleStateChange,
  handleStateChangeSecondLayer,
} from '@/utils/state.utils';

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
  autoFocus?: boolean;
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
  autoFocus = false,
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputElement = (
    <input
      id={id}
      type={inputType}
      value={value}
      min={valueRange?.MIN_LENGTH}
      max={valueRange?.MAX_LENGTH}
      maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
      placeholder={placeholder}
      onChange={(e) => {
        const parsedValue =
          type === 'number' ? Number(e.target.value) : e.target.value;
        if (!parentStateKey) {
          handleStateChange(stateKey, setState)(parsedValue);
        } else {
          handleStateChangeSecondLayer(
            stateKey,
            parentStateKey,
            setState
          )(parsedValue);
        }
      }}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel || id}
      autoFocus={autoFocus}
    />
  );

  return (
    <div style={{ position: 'relative' }}>
      {inputElement}
      {type === 'password' && (
        <button
          type="button"
          onClick={toggleShowPassword}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
    </div>
  );
};

export default Input;
