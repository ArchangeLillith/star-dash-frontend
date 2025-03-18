import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TransitionWrapper from '@/components/TransitionWrapper';
import Input from '@/components/Input';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

import { SettingsContext } from '@/context/settings/SettingsProvider';
import { AuthContext } from '@/context/auth/AuthProvider';
import loginService from './login.api';

import { backgroundMap } from '@/context/settings/settingsProvider.utils';
import { TEXT_INPUT_SETTINGS } from '@/utils/variables';
import { LoginFormState, InitializeLogin } from './Login.types';

const Login = () => {
  //Declare state and navigation variables
  const { setSettingsState } = useContext(SettingsContext);
  const { loginToAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  //Initialize the page state
  const [formStateLogin, setFormStateLogin] =
    useState<LoginFormState>(InitializeLogin);

  //Update the background
  useBackgroundUpdater({
    backgroundKey: 'login',
    backgroundMap,
    setSettingsState,
  });

  //Login onclick logic
  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { username, password } = formStateLogin;

    try {
      const token = await loginService.authenticateUserAndStoreToken({
        username,
        password,
      });
      if (!token) return;

      const managerRuns = await loginToAuthState(token);

      //Navigation logic!
      const totalRuns =
        managerRuns.archivedEvents.length + managerRuns.archivedEvents.length;

      //Clean one line with ternary
      navigate(totalRuns === 1 ? '/schedule' : `/change-event`);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.login}>
      <div className="transition-base login">
        <form className="form-container">
          <div className="form-title">Manager Login</div>
          <div className="input-card">
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              className="input"
              value={formStateLogin.username}
              setState={setFormStateLogin}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'username'}
              autoFocus={true}
            />
          </div>
          <div className="input-card">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              className="input"
              value={formStateLogin.password}
              setState={setFormStateLogin}
              maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
              stateKey={'password'}
            />
          </div>
          <div className="notice-text">
            <Link className="link" to="/register">
              Don't have an account? Register!
            </Link>
          </div>
          <button className="submit-btn" onClick={login}>
            Login
          </button>
        </form>
        <div className="desktop-title login">Login</div>
      </div>
    </TransitionWrapper>
  );
};

export default Login;
