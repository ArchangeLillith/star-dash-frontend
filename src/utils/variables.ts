export const TextInputLength = 25;
export const TeamNumberInputLength = 4;

export const TEXT_INPUT_SETTINGS = {
  MAX_LENGTH: 25,
  MIN_LENGTH: 1,
};
export const TEAM_NUMBER_INPUT_SETTINGS = {
  MAX_LENGTH: 4,
  MIN_LENGTH: 2,
};

export const TeamFormFields = [
  { id: 'isv1', stateKey: 'isv1', placeholder: 'ISV1' },
  { id: 'isv2', stateKey: 'isv2', placeholder: 'ISV2' },
  { id: 'bp', stateKey: 'bp', placeholder: 'BP' },
];

export const InitializeCarnivalState = {
  event: '',
  leadManager: '',
  filler: '',
  fillTeam: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
  healTeam: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
  sb1Team: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
  sb2Team: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
};

export const InitializeMarathonState = {
  filler: '',
  event: '',
  leadManager: '',
  fillTeam: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
  encoreTeam: {
    isv1: undefined,
    isv2: undefined,
    bp: undefined,
  },
};

export const InitializeCreateRun = {
  selectedEvent: '',
  runnerName: '',
  isv1: undefined,
  isv2: undefined,
  bp: undefined,
  runPassword: '',
};

export const InitializeFillerData = [
  {
    name: 'Loading...',
    teams: {
      healTeam: { isv1: 0, isv2: 0, bp: 0 },
      fillTeam: { isv1: 0, isv2: 0, bp: 0 },
      sb1: { isv1: 0, isv2: 0, bp: 0 },
      sb2: { isv1: 0, isv2: 0, bp: 0 },
    },
    event: 'Loading...',
    leadManager: 'Loading...',
  },
];

export const InitializeRegister = {
  username: '',
  password: '',
  passwordConfirm: '',
};

export const InitializeLogin = {
  username: '',
  password: '',
};

export enum ETeamNames {
  FillTeam = 'Fill Team',
  HealTeam = 'Heal Team',
  Sb1Team = 'SB1 Team',
  Sb2Team = 'SB2 Team',
  Sb1 = 'SB1',
  Sb2 = 'SB2',
}

export const teamParentMap: Record<ETeamNames, string> = {
  [ETeamNames.FillTeam]: 'fillTeam',
  [ETeamNames.HealTeam]: 'healTeam',
  [ETeamNames.Sb1Team]: 'sb1Team',
  [ETeamNames.Sb2Team]: 'sb2Team',
  [ETeamNames.Sb1]: 'sb1',
  [ETeamNames.Sb2]: 'sb2',
};

export type hoursPerPageOptions = 10 | 20 | 50 | 200;

export enum ERegexHandler {
  CreateRunPass = 'createRunPass',
  UserPass = 'userPass',
}
export const regexHandler = {
  [ERegexHandler.CreateRunPass]: {
    minLength: 12,
    maxLength: 20,
    uppercase: /[A-Z]/,
    number: /\d/,
    specChar: /[\W_]/,
    spaces: false,
  },
  [ERegexHandler.UserPass]: {
    minLength: 6,
    maxLength: 15,
    uppercase: /[A-Z]/,
    number: /\d/,
    specChar: false,
    spaces: false,
  },
};

export const DummyFillerData = [
  {
    name: 'Ki',
    teams: {
      healTeam: { isv1: 13, isv2: 48, bp: 7 },
      fillTeam: { isv1: 47, isv2: 9, bp: 30 },
      sb1: { isv1: 16, isv2: 43, bp: 16 },
      sb2: { isv1: 16, isv2: 32, bp: 8 },
    },
    event: 'Moonlight Dash',
    leadManager: 'Chris',
  },
  {
    name: 'Zach',
    teams: {
      healTeam: { isv1: 17, isv2: 29, bp: 30 },
      fillTeam: { isv1: 35, isv2: 30, bp: 31 },
      sb1: { isv1: 6, isv2: 46, bp: 4 },
      sb2: { isv1: 3, isv2: 7, bp: 40 },
    },
    event: 'Footsteps',
    leadManager: 'Casey',
  },
  {
    name: 'Jess',
    teams: {
      healTeam: { isv1: 25, isv2: 38, bp: 49 },
      fillTeam: { isv1: 24, isv2: 1, bp: 5 },
      sb1: { isv1: 29, isv2: 26, bp: 12 },
      sb2: { isv1: 21, isv2: 19, bp: 41 },
    },
    event: 'Starry Night',
    leadManager: 'Jordan',
  },
  {
    name: 'Alexr',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Aletx',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Aleyx',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Aluex',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Aleix',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Aleox',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Alpex',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Ale[x',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
  {
    name: 'Ale]x',
    teams: {
      healTeam: { isv1: 15, isv2: 21, bp: 6 },
      fillTeam: { isv1: 18, isv2: 45, bp: 9 },
      sb1: { isv1: 20, isv2: 10, bp: 35 },
      sb2: { isv1: 10, isv2: 23, bp: 46 },
    },
    event: 'Footsteps',
    leadManager: 'Jordan',
  },
];

export const DummyManagerData = [
  { username: 'Eli', id: 'dkhfdlashfasdfkaslfkh' },
  { username: 'Levi', id: 'dkhfdlashfasdfkaslfkh' },
  { username: 'Ali', id: 'dkhfdlashfasdfkaslfkh' },
  { username: 'Ellie', id: 'dlsfgjd;fsogjidfsgsdfg' },
  { username: 'Mikui', id: 'rewt89540uiorwtgjr;ew' },
  { username: 'Leo', id: ';cvmklbclxkbm' },
];
