import { Filler } from '@/utils/types';
import { SetStateAction } from 'react';


const FillerSelection: React.FC<FillerSelectionProps> = ({
  hour,
  fillers,
  fillersPerHour,
  setFillersPerHour,
}) => {
  const handleSettingFiller = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.id);
    const name = e.target.value;

    setFillersPerHour((prev) => {
      const newFiller = fillers.find((filler) => filler.name === name);
      if (!newFiller) return prev;

      const updated = { ...prev };
      updated[hour] = [...(updated[hour] || new Array(4).fill(null))];
      updated[hour][index] = newFiller;
      return updated;
    });
  };

  const renderOptions = (index: number) => {
    const selectedFiller = fillersPerHour[hour][index]?.name;

    return fillers.map((filler) => {
      const isAlreadySelected = fillersPerHour[hour]?.some(
        (chosenFiller) => chosenFiller?.name === filler.name
      );

      if (filler.name === selectedFiller) {
        return (
          <option value={filler.name} key={filler.name}>
            {filler.name}
          </option>
        );
      }
      if (!isAlreadySelected) {
        return (
          <option value={filler.name} key={filler.name}>
            {filler.name}
          </option>
        );
      }
      return null;
    });
  };

  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <select
          className="input"
          id={`${i}`}
          key={`select-${i}`}
          value={fillersPerHour[hour]?.[i]?.name || 'default'} // Set value from state
          onChange={(e) => handleSettingFiller(e)}
        >
          <option value="default">Select filler...</option>
          {renderOptions(i)}
        </select>
      ))}
    </>
  );
};

export default FillerSelection;
