import React, { createContext, useState } from 'react';

// import { EventState, EventType } from '@/utils/types';

import {
  DefaultEvents,
  EventsProviderProps,
  EventsProviderType,
} from './eventsProvider.utils';
import { EventState } from '@/utils/types';

/**
 * Settings context to allow other components to pull from it no matter how nested
 */
const EventsContext = createContext<EventsProviderType>({
  eventsState: DefaultEvents,
  setEventsState: () => {},
});

const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [eventsState, setEventsState] = useState<EventState>(DefaultEvents);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const eventData = await eventService.getEvents();
  //       setAllEvents(eventData);
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   };

  //   fetchEvents();
  // }, []); // Empty dependency array to run only once on mount

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
