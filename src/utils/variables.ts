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
}

export const teamParentMap: Record<ETeamNames, string> = {
  [ETeamNames.FillTeam]: 'fillTeam',
  [ETeamNames.HealTeam]: 'healTeam',
  [ETeamNames.Sb1Team]: 'sb1Team',
  [ETeamNames.Sb2Team]: 'sb2Team',
};

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
