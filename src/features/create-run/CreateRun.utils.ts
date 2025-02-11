import { UUID } from 'server/types';
import runService from '../../services/run';
import { AuthState, EventState } from '@/utils/types';
import { CreateRunFormState } from './CreateRun.types';

export const runPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]{12}$/;

export const InitializeCreateRun = {
  selectedEvent: {
    event_name: '',
    event_type: 'M' as 'M' | 'C',
    event_id: '000' as UUID,
  },
  runnerName: '',
  isv1: undefined,
  isv2: undefined,
  bp: undefined,
  runPassword: '',
};

export const submitRun = async (
  state: CreateRunFormState,
  authState: AuthState,
  setEventsState: React.Dispatch<React.SetStateAction<EventState>>,
  navigate: (path: string) => void
) => {
  const run_info = await runService.createRun(state, authState);
  setEventsState((prev) => ({
    ...prev,
    activeEvents: [
      ...prev.activeEvents,
      {
        event_id: run_info.event_id,
        event_name: state.selectedEvent.event_name,
        event_type: state.selectedEvent.event_type,
      },
    ],
    selectedEvent: {
      //Use the default values from the pre-intialized teams and fillers per hour
      ...prev.selectedEvent,
      //Not ideal, but we ! here because there should be no way to get here without breaking everything if you're not a manager
      lead_manager: authState.managerData!.id,
      lead_name: authState.managerData!.username,
      run_id: run_info.run_id,
      event_id: run_info.event_id,
      event_type: state.selectedEvent.event_type,
      event_name: state.selectedEvent.event_name,
      notesPerHour: [],
      finishedHours: [],
      fillersAvaliable: [],
    },
  }));
  navigate('/schedule');
};
