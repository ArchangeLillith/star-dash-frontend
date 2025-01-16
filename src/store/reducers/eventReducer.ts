import { EventState } from '@/utils/types';

export const eventReducer = (
  state: EventState,
  action: { type: string; payload: any }
): EventState => {
  switch (action.type) {
    case 'UPDATE_FILLERS_PER_HOUR':
      return {
        ...state,
        selectedEvent: {
          ...state.selectedEvent,
          fillersPerHour: action.payload, // Update only this field
        },
      };

    case 'UPDATE_NOTES_PER_HOUR':
      return {
        ...state,
        selectedEvent: {
          ...state.selectedEvent,
          notesPerHour: action.payload, // Update only this field
        },
      };

    case 'RESET_SELECTED_EVENT':
      return {
        ...state,
        selectedEvent: action.payload, // Replace entire selectedEvent
      };

    default:
      return state;
  }
};
