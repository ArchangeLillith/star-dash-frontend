import { UUID } from 'server/types';

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
