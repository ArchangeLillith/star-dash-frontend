import { EventType } from '@/utils/types';

//Weird typing, but if we initialize with a number then the box had a number to start with. This gives us a better handle on nkowing if it's been touched as well
export type CreateRunFormState = {
  selectedEvent: EventType;
  runnerName: string;
  isv1: number | undefined;
  isv2: number | undefined;
  bp: number | undefined;
  runPassword: string;
};
