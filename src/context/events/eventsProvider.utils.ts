import { EventState, EventType } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';
import { UUID } from 'server/types';

export interface EventsProviderProps {
  children: React.ReactNode;
}
export type EventsProviderType = {
  eventsState: EventState;
  setEventsState: Dispatch<SetStateAction<EventState>>;
};

export const InitiateEvents: EventType[] = [
  {
    event_id: '00000000-0000-0000-0000-000000000000' as UUID,
    event_name: 'Loading...',
    event_type: 'C',
  },
];

export const DefaultEvents: EventState = {
  allEvents: [], // Empty array for events
  archivedEvents: [], // Empty array for archived events
  activeEvents: [], // Empty array for active events
  selectedEvent: {
    event_id: '00000000-0000-0000-0000-000000000000' as UUID, // Replace with a dummy UUID if required
    event_type: 'M', // Default to 'M' or another valid value
    event_name: '', // Empty string for event name
    fillersPerHour: [], // Empty array for fillers
    notesPerHour: [], // Empty array for notes
    teamsPerHour: [], // Empty array for teams
    finishedHours: [], // Empty array for finished hours
    fillersAvaliable: [], // Empty array for available fillers
  },
};
