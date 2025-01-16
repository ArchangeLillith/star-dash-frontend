import { EventType } from '@/utils/types';
import { UUID } from 'server/types';

export const InitializeJoinRun = {
  manager: '',
  leadManager: '',
  event: {
    event_id: '0' as UUID,
    event_name: 'Loading...',
    event_type: 'M' as 'M' | 'C',
  },
  runPassword: '',
};

export type JoinRunFormState = {
  manager: string;
  leadManager: string;
  event: EventType;
  runPassword: string;
};
