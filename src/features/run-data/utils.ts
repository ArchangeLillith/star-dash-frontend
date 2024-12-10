import { Filler, Teams } from '@/utils/types';

export type Diff = {
  path: string; // Path to the differing value
  oldValue: any; // Value from the Filler.teams
  newValue: any; // Value from the Teams array
};

export function compareFillersAndTeams(
  fillers: Filler[],
  teamsArray: Teams[]
): Diff[] {
  const differences: Diff[] = [];

  function compareObjects(obj1: any, obj2: any, path: string = ''): void {
    if (typeof obj1 !== typeof obj2) {
      differences.push({ path, oldValue: obj1, newValue: obj2 });
      return;
    }

    if (typeof obj1 === 'object' && obj1 !== null) {
      if (Array.isArray(obj1)) {
        // Compare arrays
        obj1.forEach((item, index) => {
          compareObjects(item, obj2[index], `${path}[${index}]`);
        });
        if (obj1.length !== obj2.length) {
          differences.push({ path, oldValue: obj1, newValue: obj2 });
        }
      } else {
        // Compare objects
        const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
        allKeys.forEach((key) => {
          compareObjects(obj1[key], obj2[key], path ? `${path}.${key}` : key);
        });
      }
    } else if (obj1 !== obj2) {
      // Primitive values
      differences.push({ path, oldValue: obj1, newValue: obj2 });
    }
  }

  // Loop over fillers and compare their `teams` property with the corresponding Teams object
  fillers.forEach((filler, index) => {
    compareObjects(filler.teams, teamsArray[index], `[${index}].teams`);
  });

  return differences;
}

/**
 * Creation of the tempTeams indipendant state
 * @param fillerData - array of data to populate the new state with
 * @returns an indipendent Teams[] cooresponding index -> index with fillerData
 */
export const createTempTeams = (fillerData: Filler[]): Teams[] => {
  // Create a deep copy of the teams
  return fillerData.map((filler) => JSON.parse(JSON.stringify(filler.teams)));
};
