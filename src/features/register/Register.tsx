import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import TransitionWrapper from '../../components/TransitionWrapper';
import { SettingsContext } from '../../context/settings/SettingsProvider';
import { backgroundMap } from '../../context/settings/utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

import authService from './register.api';

import Input from '@/components/Input';
import { TEXT_INPUT_SETTINGS } from '@/utils/variables';
import { RegisterFormState, InitializeRegister } from './Register.types';
import { validateFields } from './Register.utils';

const Register = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'register',
    backgroundMap,
    setSettingsState,
  });

  const registerManager = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const errors = validateFields(formStateRegister);

    if (errors.length > 0) {
      alert('ERRORRRRR');
      return;
    }

    const { username, password } = formStateRegister;
    const managerDTO = { username, password };

    try {
      const token = await authService.registerUserAndStoreToken(managerDTO);
      if (token) {
        // log in
        // navigate home
        alert('logged in');
      }
    } catch (error) {
      console.log(`EERRRORR logging in`, error);
    }
  };

  const [formStateRegister, setFormStateRegister] =
    useState<RegisterFormState>(InitializeRegister);

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.register}>
      <div className="transition-base register">
        <form className="form-container">
          <div className="form-title">Manager Register</div>
          <div className="input-card">
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              className="input"
              value={formStateRegister.username}
              setState={setFormStateRegister}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'username'}
            />
          </div>
          <div className="input-card">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              className="input"
              value={formStateRegister.password}
              setState={setFormStateRegister}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'password'}
            />
          </div>
          <div className="input-card">
            <label htmlFor="password-confirm">Confirm Password</label>
            <Input
              id="password-confirm"
              className="input"
              value={formStateRegister.passwordConfirm}
              setState={setFormStateRegister}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'passwordConfirm'}
            />
          </div>
          <div className="notice-text">
            <Link className="link" to="/login">
              Already have an account? Login!
            </Link>
          </div>
          <button className="submit-btn" onClick={registerManager}>
            Register
          </button>
        </form>
        <div className="desktop-title register">Manager Register</div>
      </div>
    </TransitionWrapper>
  );
};

export default Register;
