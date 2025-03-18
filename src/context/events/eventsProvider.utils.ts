import { HourToFillers } from '@/features/schedule/Schedule.utils';
import { EventState, EventType, Filler, TeamsPerHour } from '@/utils/types';
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

export const DefaultEvents: EventState = {
  allEvents: [], // Empty array for ALL events
  carnivalEvents: [], // Empty array for ALL carnival events
  marathonEvents: [], // Empty array for ALL marathon events
  archivedEvents: [], // Empty array for archived events (SPECIFIC to manager who's logged in)
  activeEvents: [], // Empty array for active events (SPECIFIC to manager who's logged in)
  selectedEvent: {
    //Current event the manager is working with
    lead_manager: '00000000-0000-0000-0000-000000000000' as UUID,
    lead_name: '',
    run_id: '00000000-0000-0000-0000-000000000000' as UUID,
    event_id: '00000000-0000-0000-0000-000000000000' as UUID,
    event_type: 'M', // Default to 'M' or another valid value
    event_name: '', // Empty string for event name
    fillersPerHour: initializeHourToFillers(), // Empty array for fillers
    notesPerHour: [], // Empty array for notes
    teamsPerHour: initializeTeamsPerHour(), // Empty array for teams
    finishedHours: [], // Empty array for finished hours
    fillersAvaliable: [], // Empty array for available fillers
  },
};
