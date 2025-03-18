import { EventType } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';

interface EventSelectProps<T> {
  options: EventType[];
  stateKey: keyof T;
  state: T;
  value: string;
  setState: Dispatch<SetStateAction<T>>;
  defaultOption?: string;
}

const EventSelect = <T,>({
  options,
  setState,
  state,
  stateKey,
  defaultOption,
}: EventSelectProps<T>) => {
  const setEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const type = selectedOption.getAttribute('data-type');
    const id = selectedOption.id;
    const value = selectedOption.value;

    setState((prev) => ({
      ...prev,
      [stateKey]: {
        event_id: id,
        event_name: value,
        event_type: type,
      },
    }));
  };

  return (
    <select
      className="select"
      onChange={(e) => setEvent(e)}
      value={(state[stateKey] as { event_name: string }).event_name || ''}
    >
      {defaultOption && <option value="">{defaultOption}</option>}
      {options.map((option, index) => (
        <option
          key={option.event_name + index}
          id={option.event_id}
          data-type={option.event_type}
          value={option.event_name}
        >
          {option.event_name}
        </option>
      ))}
    </select>
  );
};

export default EventSelect;
