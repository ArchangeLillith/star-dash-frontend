import React, { createContext, useEffect, useState } from 'react';
import {
  DefaultEvents,
  EventsProviderProps,
  EventsProviderType,
} from './eventsProvider.utils';
import { EventState, EventType } from '@/utils/types';
import eventService from '../../services/events';

/**
 * Settings context to allow other components to pull from it no matter how nested
 */
export const EventsContext = createContext<EventsProviderType>({
  eventsState: DefaultEvents,
  setEventsState: () => {},
});

const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [eventsState, setEventsState] = useState<EventState>(DefaultEvents);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        //While this could be a little overkill, we'd rather do this here and set two more state variables instead of havign to calculate this over and over
        const eventData = await eventService.getEvents();
        console.log(`Event data:`, eventData);
        const allEvents = eventData;
        const marathon = eventData.filter(
          (entry: EventType) => entry.event_type === 'M'
        );
        const carnival = eventData.filter(
          (entry: EventType) => entry.event_type === 'C'
        );

        setEventsState((prev) => ({
          ...prev,
          carnivalEvents: carnival,
          marathonEvents: marathon,
          allEvents,
        }));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array to run only once on mount

  return (
    <EventsContext.Provider
      value={{
        eventsState,
        setEventsState,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
