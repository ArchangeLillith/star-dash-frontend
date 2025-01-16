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

//Refactor if there becomes a utils file for this feature, this should live there instead but for now it's the only entry so not work an extra file.
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
