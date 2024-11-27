export type CreateRunFormState = {
  selectedEvent: string;
  runnerName: string;
  isv1: number | undefined;
  isv2: number | undefined;
  bp: number | undefined;
  runPassword: string;
};

export type MarathonFormState = {
  event: string;
  leadManager: string;
  filler: string;
  fillTeam: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
  encoreTeam?: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
};

export type CarnivalFormState = {
  event: string;
  leadManager: string;
  filler: string;
  fillTeam: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
  healTeam: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
  sb1Team: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
  sb2Team: {
    isv1: number | undefined;
    isv2: number | undefined;
    bp: number | undefined;
  };
};

export type LoginFormState = {
  username: string;
  password: string;
};
export type RegisterFormState = {
  username: string;
  password: string;
  passwordConfirm: string;
};
