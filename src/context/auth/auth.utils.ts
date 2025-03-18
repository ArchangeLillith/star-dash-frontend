import { AuthState, EventType, Manager } from '@/utils/types';
import { SettingsState } from '../settings/settingsProvider.utils';

export const unauthenticatedAuthState = {
  authenticated: false,
  managerData: null,
  archivedEvents: [],
  activeEvents: [],
};

/**
 * Typing for the auth state
 */
export interface AuthContextType {
  authState: AuthState;
  authLoading: boolean;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
  loginToAuthState: (token: string) => Promise<ManagerRuns>;
  logoutFromAuthState: () => void;
  updateUserData: (userData: Partial<AuthState>) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

//DOES need to have events on here as it's a return from database
export interface LoginManagerResponse {
  settings: SettingsState;
  archivedEvents: EventType[];
  activeEvents: EventType[];
  managerData: Manager;
}

export type ManagerRuns = {
  activeEvents: EventType[];
  archivedEvents: EventType[];
};
