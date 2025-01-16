import React, { createContext, useState, useEffect, useContext } from 'react';

import loginService from '../../services/login';
import storage from '../../utils/storage';
import { AuthState, Manager } from '../../utils/types';
import { SettingsContext } from '../settings/SettingsProvider';
import {
  AuthContextType,
  AuthProviderProps,
  unauthenticatedAuthState,
} from './auth.utils';
import { EThemeNames, SettingsState } from '../settings/settingsProvider.utils';
import useThemeAplication from '@/hooks/useThemeApplication';

/**
 * Auth state object that's going to get used by other components, initialized here
 */
export const AuthContext = createContext<AuthContextType>({
  authState: {
    authenticated: false,
    managerData: null,
    archivedEvents: [],
    activeEvents: [],
  },
  authLoading: true,
  setAuthState: () => {},
  loginToAuthState: () => {},
  logoutFromAuthState: () => {},
  updateUserData: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(
    unauthenticatedAuthState
  );
  const { updateSettings } = useContext(SettingsContext);
  const [authLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState<EThemeNames>(EThemeNames.KAITO);

  useThemeAplication(theme);

  /**
   * The function that handles the auth state to reflect a log in
   * @param token - a JWT
   */
  const loginToAuthState = async (token: string) => {
    interface LoginManagerResponse {
      settings: SettingsState;
      activeEvents: string[];
      archivedEvents: string[];
      managerData: Manager;
    }
    try {
      //get settings
      const {
        settings,
        activeEvents,
        archivedEvents,
        managerData,
      }: LoginManagerResponse = await loginService.loginManager(token);
      updateSettings(settings);
      setTheme(settings.theme);
      setAuthState({
        authenticated: true,
        managerData,
        activeEvents,
        archivedEvents,
      });
    } catch (error) {
      console.log(`Error`, error);
      setAuthState((prev) => {
        if (!prev.authenticated) return prev;
        return unauthenticatedAuthState;
      });
      alert(error);
    }
  };

  /**
   * The function that resets a user in auth state when they log out
   */
  const logoutFromAuthState = () => {
    setAuthState(unauthenticatedAuthState);
    storage.removeToken();
  };

  /**
   * Updates the userdata in state for the components to use
   * @param userData - The user data to be set in state
   */
  const updateUserData = (userData: Partial<AuthState>) => {
    setAuthState((prevState) => ({
      ...prevState,
      ...userData,
    }));
  };

  //
  /**
   * If there's a valid token in storage, check if the user is logged in - this runs on load
   * Refactor we could even make this an option, if the user wants it to auto log them in or not!
   */
  useEffect(() => {
    const checkUser = async () => {
      const token = storage.getToken();

      // Check if no token exists and the user is already logged out
      if (!token) {
        if (!authState.authenticated) {
          setAuthState(unauthenticatedAuthState);
        }
        setLoading(false); // Only set authLoading to false here
        return;
      }

      try {
        loginToAuthState(token);
      } catch (error) {
        console.log(`error`, error);
      }
    };
    checkUser();
  }, [authState.authenticated]);

  return (
    <AuthContext.Provider
      value={{
        authLoading,
        authState,
        setAuthState,
        loginToAuthState,
        logoutFromAuthState,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
