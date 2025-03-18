import { CreateRunFormState } from '@/features/create-run/CreateRun.types';
import { AuthState, ETeamTypes } from '@/utils/types';

import baseService from './base';
import managerService from './manager';
import runnerService from './runner';
import teamService from './team';
import { UUID } from 'server/types';

const createRun = async (
  formState: CreateRunFormState,
  authState: AuthState
) => {
  //If there's no manager, there shouldn't be a run lol
  if (!authState.managerData) return;

  //Does the manager lead another of the same event name?
  const leadManagerCheck = await managerService.leadManagerCheck(
    authState.managerData?.id,
    formState.selectedEvent.event_id
  );
  //If so, error
  if (leadManagerCheck) {
    const error = new Error(
      "You already lead an event of this type, you're only allowed to lead one run per event"
    );
    return error;
  }

  //If any of the form is wiped, error
  if (
    formState.isv1 === undefined ||
    formState.isv2 === undefined ||
    formState.bp === undefined
  ) {
    const error = new Error('No input??');
    return error;
  }

  //Set the default in case a manager doesn't want to name their runner
  if (formState.runnerName === '') {
    formState.runnerName = 'Runner';
  }

  //Create the DTO and add the id placeholder for when/if that returns
  const runnerDTO = {
    runner_name: formState.runnerName,
    team_type: ETeamTypes.fill,
    isv1: formState.isv1,
    isv2: formState.isv2,
    bp: formState.bp,
    runner_id: '' as UUID,
  };

  //Attach the lead to the event in the joint table
  await managerService.addLeadManager(
    authState.managerData.id,
    formState.selectedEvent.event_id
  );

  //Create the runner in the runners table and get back the ID
  const runnerId = await runnerService.createRunner(runnerDTO);
  runnerDTO.runner_id = runnerId;

  //Create the runners teams in the teams table, no need for ID
  await teamService.writeTeam(runnerDTO);

  //Create the run payload
  const payload = {
    lead_manager: authState.managerData.id,
    runner_id: runnerId,
    event_id: formState.selectedEvent.event_id,
  };
  //Post the run payload to the runs table
  const result = await baseService.post('/api/protected/runs', payload);
  //Finally, return from the database which should include the new run_id so we can pass that to the frontend and navigate there
  return result;
};

export default { createRun };
