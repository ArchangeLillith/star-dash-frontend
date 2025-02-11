import React, { useState } from 'react';

interface ConfirmPassInputProps {
  runPassword: string;
}

// This is a **hard coded** component specifically for CreateRun, careful if you want to use it again
const ConfirmPassInput: React.FC<ConfirmPassInputProps> = ({ runPassword }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedChar = e.target.value.slice(-1); // Get the last typed character
    const nextIndex = inputValue.length; // Current position in the expected string

    if (typedChar === runPassword[nextIndex]) {
      setInputValue(inputValue + typedChar); // Append the valid character
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage(
        'Incorrect input. Please type exactly as shown (caps matter).'
      );
    }
  };

  return (
    <div>
      <p className="notice-text">
        Please type in the run password to confirm: <br />
        <span className="password-confirm">{runPassword}</span>
      </p>
      <input
        type="text"
        className={errorMessage ? 'error input' : 'black input'}
        value={runPassword.slice(0, inputValue.length)} // Display valid portion of the input
        placeholder={runPassword} // Placeholder shows full expected text
        onChange={handleInput}
        maxLength={runPassword.length} // Prevent extra characters
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default ConfirmPassInput;
