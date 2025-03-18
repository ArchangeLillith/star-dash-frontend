import { Filler, TeamsPerHour } from '@/utils/types';

export type HourToFillers = Record<string, Filler[]>;

export const isTeamFullySelected = (hour: number, teamsPerHour: TeamsPerHour) =>
  teamsPerHour[`hour-${hour}`]?.length === 4;
export const areFillersComplete = (
  hour: number,
  fillersPerHour: Record<string, Filler[]>
) => fillersPerHour[`hour-${hour}`]?.every((filler) => filler !== null);
