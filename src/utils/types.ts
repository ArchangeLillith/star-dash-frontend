//*Typings subject to change, keep in mind foreign keys are all uuids
export type ActiveRun = {
  runID: string; //Typed right?
  //Do we change the leadManager to leadManagerId? easier to query with, but then we have to query every time we use it. How often will this be used?
  leadManager: string; //String or id or object of both?
  managers: string[]; //prob {name: string, managerID: uuid} like the rest for ez lookup
  fillers: string[]; //Should this be {name: string; id: uuid} ? Then we can ez look them up when we need to....
  teamsPerHour: string[]; //array of nested arrays with 4 slots, again shoulg this be [[{name: string, id: uuid} .... ]] so we can ez lookup?
  notesPerHour: string[][]; //array of nested arrays that include strings
  runnerID: string; //Should we have the runner object here instead? So we can access their stats anywhere? Or should we do a fresh call everytime we acivley use it? Or we can do the {name: string, runnerId: uuid} like the fillers?
  eventName: string;
}

