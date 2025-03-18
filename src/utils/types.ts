import { SettingsState } from '@/context/settings/settingsProvider.utils';
import { HourToFillers } from '@/features/schedule/Schedule.utils';
import { UUID } from 'server/types';

export type Manager = {
  id: UUID;
  username: string;
};

export type ManagerLoginObject = {
  managerData: {
    username: string;
    id: UUID;
  };
  activeEvents: EventType[];
  archivedEvents: EventType[];
  settings: SettingsState;
};

export type AuthState = {
  authenticated: boolean;
  managerData: Manager | null;
};

export interface WrapperProps {
  children: React.ReactNode;
}

export type EventType = {
  event_id: UUID;
  event_name: string;
  event_type: 'M' | 'C';
};

export type Filler = {
  name: string;
  teams: Teams;
  event: string;
  leadManager: string;
};

export type Teams = {
  healTeam: Team;
  fillTeam: Team;
  sb1: Team;
  sb2: Team;
};

export type Team = {
  isv1: number;
  isv2: number;
  bp: number;
};

export type ChosenTeam = {
  fillerName: string;
  teamName: string;
  team: Team;
};

export enum ETeamTypes {
  fill = 'fill',
  heal = 'heal',
  sb1 = 'sb1',
  sb2 = 'sb2',
}

export type runnerDTO = {
  runner_name: string;
  isv1: number;
  isv2: number;
  bp: number;
};
export type TeamsPerHour = Record<string, ChosenTeam[]>;

export type EventState = {
  allEvents: EventType[];
  carnivalEvents: EventType[];
  marathonEvents: EventType[];
  archivedEvents: EventType[];
  activeEvents: EventType[];
  selectedEvent: {
    lead_manager: UUID;
    lead_name: string;
    run_id: UUID;
    event_id: UUID;
    event_type: 'M' | 'C';
    event_name: string;
    fillersPerHour: HourToFillers;
    notesPerHour: string[];
    teamsPerHour: TeamsPerHour;
    finishedHours: number[];
    fillersAvaliable: Filler[];
  };
};
