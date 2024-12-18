import { Filler, TeamsPerHour } from '@/utils/types';

export type HourToFillers = Record<string, Filler[]>;

export const initializeHourToFillers = (): HourToFillers => {
  const initialFillers: HourToFillers = {};

  for (let i = 0; i < 200; i++) {
    initialFillers[`hour-${i + 1}`] = new Array(4).fill(null) as Filler[];
  }

  return initialFillers;
};

export const initializeTeamsPerHour = (): TeamsPerHour => {
  const teamsPerHour: TeamsPerHour = {};

  // Create 200 entries with empty arrays
  for (let i = 0; i < 200; i++) {
    teamsPerHour[`hour-${i + 1}`] = [];
  }

  return teamsPerHour;
};

export const isTeamFullySelected = (hour: number, teamsPerHour: TeamsPerHour) =>
  teamsPerHour[`hour-${hour}`]?.length === 4;
export const areFillersComplete = (
  hour: number,
  fillersPerHour: Record<string, Filler[]>
) => fillersPerHour[`hour-${hour}`]?.every((filler) => filler !== null);
