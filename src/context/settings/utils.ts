import { hoursPerPageOptions } from '@/utils/variables';

//Make an enum for this for type saftey, see ETeamName
export const backgroundMap: Record<string, string> = {
  home: '/card-backgrounds/home.png',
  marathon: '/card-backgrounds/marathon.webp',
  carnival: '/card-backgrounds/carnival.png',
  about: '/card-backgrounds/about.jpg',
  createRun: '/card-backgrounds/create-run.webp',
  login: '/card-backgrounds/login.webp',
  register: '/card-backgrounds/register.webp',
  help: '/card-backgrounds/help.webp',
  authHelp: '/card-backgrounds/help.webp',
  data: '/card-backgrounds/data.webp',
  schedule: '/card-backgrounds/schedule.webp',
  runData: '/card-backgrounds/run-data.webp',
};

export const DefaultSettings = {
  theme: EThemeNames.DEFAULT,
  favoriteCharacters: [],
  currentPageBackground: '',
  hoursPerPage: 10 as hoursPerPageOptions,
  startingHour: 1,
};

export type SettingsState = {
  theme: EThemeNames;
  favoriteCharacters: string[];
  currentPageBackground: string;
  hoursPerPage: hoursPerPageOptions;
  startingHour: number;
};

const enum EThemeNames {
  MIKU = 'miku',
  LUKA = 'luka',
  RIN = 'rin',
  KAITO = 'kaito',
  DEFAULT = 'default',
}
