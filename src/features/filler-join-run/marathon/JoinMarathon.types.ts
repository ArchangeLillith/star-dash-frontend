//JULIA check with her to make sure these numbers are accurate
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

//Refactor if there becomes a utils file for this feature, this should live there instead but for now it's the only entry so not work an extra file.
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
