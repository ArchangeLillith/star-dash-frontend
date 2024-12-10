import { Filler, Team } from '@/utils/types';

type ChosenTeam = {
  fillerName: string;
  teamName: string;
  team: Team;
};

type HourToFillers = Record<string, Filler[]>;

export const initializeHourToFillers = (): HourToFillers => {
  const initialFillers: HourToFillers = {};

  for (let i = 0; i < 200; i++) {
    initialFillers[`hour-${i + 1}`] = new Array(4).fill(null) as Filler[];
  }

  return initialFillers;
};

export const initializeTeamsPerHour = (): Record<string, ChosenTeam[]> => {
  const teamsPerHour: Record<string, ChosenTeam[]> = {};

  // Create 200 entries with empty arrays
  for (let i = 0; i < 200; i++) {
    teamsPerHour[`hour-${i + 1}`] = [];
  }

  return teamsPerHour;
};

export const isTeamFullySelected = (
  hour: number,
  teamsPerHour: Record<string, ChosenTeam[]>
) => teamsPerHour[`hour-${hour}`]?.length === 4;
export const areFillersComplete = (
  hour: number,
  fillersPerHour: Record<string, Filler[]>
) => fillersPerHour[`hour-${hour}`]?.every((filler) => filler !== null);
