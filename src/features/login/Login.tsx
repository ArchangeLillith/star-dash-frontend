import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TransitionWrapper from '../../components/TransitionWrapper';
import { SettingsContext } from '../../context/settings/SettingsProvider';
import { backgroundMap } from '../../context/settings/settingsProvider.utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import loginService from './login.api';

import Input from '@/components/Input';
import { TEXT_INPUT_SETTINGS } from '@/utils/variables';
import { LoginFormState, InitializeLogin } from './Login.types';
import { AuthContext } from '@/context/auth/AuthProvider';

const Login = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'login',
    backgroundMap,
    setSettingsState,
  });
  const { loginToAuthState } = useContext(AuthContext);

  const [formStateLogin, setFormStateLogin] =
    useState<LoginFormState>(InitializeLogin);
  const navigate = useNavigate();

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { username, password } = formStateLogin;
    try {
      const token = await loginService.authenticateUserAndStoreToken({
        username,
        password,
      });
      if (!token) return;
      loginToAuthState(token);
      navigate(`/`);
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
