import { SettingsState } from '@/context/settings/settingsProvider.utils';
import { UUID } from 'server/types';
import { TeamsTable } from 'server/types/db.types';

//*Typings subject to change, keep in mind foreign keys are all uuids
export type Run = {
  runID: string; //Typed right?
  //Do we change the leadManager to leadManagerId? easier to query with, but then we have to query every time we use it. How often will this be used?
  leadManager: string; //String or id or object of both?
  managers: string[]; //prob {name: string, managerID: uuid} like the rest for ez lookup
  fillers: string[]; //Should this be {name: string; id: uuid} ? Then we can ez look them up when we need to....
  teamsPerHour: string[]; //array of nested arrays with 4 slots, again shoulg this be [[{name: string, id: uuid} .... ]] so we can ez lookup?
  notesPerHour: string[][]; //array of nested arrays that include strings
  runnerID: string; //Should we have the runner object here instead? So we can access their stats anywhere? Or should we do a fresh call everytime we acivley use it? Or we can do the {name: string, runnerId: uuid} like the fillers?
  eventName: string;
};

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
  activeEvents: EventType[];
  archivedEvents: EventType[];
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
  archivedEvents: EventType[];
  activeEvents: EventType[];
  selectedEvent: {
    event_id: UUID;
    event_type: 'M' | 'C';
    event_name: string;
    fillersPerHour: string[]; //?
    notesPerHour: string[]; //?
    teamsPerHour: TeamsTable[]; //?
    finishedHours: number[]; //?
    fillersAvaliable: Filler[][]; //?
  };
};
