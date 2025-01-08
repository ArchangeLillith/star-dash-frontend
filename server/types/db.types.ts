import { UUID } from '.';

export type EventsTable = {
  event_id: UUID;
  name: string;
  type: 'M' | 'C';
};

export type ManagersTable = {
  manager_id: UUID;
  manager_name: string;
};
export type RunnersTable = {
  runner_id: UUID;
  runner_name: string;
};

export type SettingsTable = {
  manager_id: UUID;
  //Refactor repace this next line as it becomes known
  settings: Record<string, any>; // JSON, stored as a generic object
};

export type FillersTable = {
  filler_id: UUID;
  filler_name: string;
};

export type RunsTable = {
  run_id: UUID; // PRIMARY KEY
  lead_manager: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  runner_id: UUID; //FOREIGN KEY to `sd_runners.runner_id`
  event_id: UUID; //FOREIGN KEY to `sd_events.event_id`
};

export type NotesTable = {
  note_id: UUID; //PRIMARY KEY
  run_id: UUID; //FOREIGN KEY to `sd_runs.run_id`
  created_by: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  hour: number; // TINYINT
  content: string; // TEXT
  created_at: Date; // TIMESTAMP, DEFAULT NOW()
};

export type ManagerRunJointTable = {
  manager_id: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  run_id: UUID; //FOREIGN KEY to `sd_runs.run_id`
};

export type FillerRunJointTable = {
  filler_id: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  run_id: UUID; //FOREIGN KEY to `sd_runs.run_id`
};

export type TeamsPerHourTable = {
  team_hour_id: UUID; //PRIMARY KEY
  run_id: UUID; //FOREIGN KEY to `sd_runs.run_id`
  filler_id: UUID | null; //FOREIGN KEY to `sd_fillers.filler_id`
  runner_id: UUID | null; //FOREIGN KEY to `sd_runners.runner_id`
  team_id: UUID; //FOREIGN KEY to `sd_teams.team_id`
};

export type TeamsTable = {
  team_id: UUID; //PRIMARY KEY
  filler_id: UUID | null; //FOREIGN KEY to `sd_fillers.filler_id`
  runner_id: UUID | null; //FOREIGN KEY to `sd_runners.runner_id`
  team_type: string; // VARCHAR(4)
  isv1: number; // TINYINT
  isv2: number; // TINYINT
  bp: number; // TINYINT
};

export type LeadManagersTable = {
  manager_id: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  event_id: UUID; //FOREIGN KEY to `sd_events.event_id`
};

export type AuthTable = {
  manager_id: UUID; //FOREIGN KEY to `sd_managers.manager_id`
  password: string; //FOREIGN KEY to `sd_events.event_id`
};

export type EventQueryResult = {
  event_name: string;
};
