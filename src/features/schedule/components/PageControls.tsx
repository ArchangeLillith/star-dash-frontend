import { SettingsContext } from '@/context/settings/SettingsProvider';
import { hoursPerPageOptions } from '@/utils/variables';
import { SetStateAction, useContext, useEffect } from 'react';

interface PageControlsProps {
  showControls: boolean;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  setPaginatedHours: React.Dispatch<SetStateAction<number[]>>;
  currentPage: number;
}

const PageControls: React.FC<PageControlsProps> = ({
  showControls,
  setCurrentPage,
  setPaginatedHours,
  currentPage,
}) => {
  const { settingsState, setSettingsState } = useContext(SettingsContext);
  const totalHours = 200;
  const hoursPerPage = settingsState.hoursPerPage;
  const startingHour = settingsState.startingHour || 1;

  const totalPages = Math.ceil(
    (totalHours - (startingHour - 1)) / hoursPerPage
  );
  const allHours = Array.from({ length: totalHours }, (_, i) => i + 1);

  useEffect(() => {
    const startIndex = startingHour - 1 + (currentPage - 1) * hoursPerPage; // Calculate start index relative to startingHour
    const endIndex = startIndex + hoursPerPage;
    const paginatedHours = allHours.slice(startIndex, endIndex);
    setPaginatedHours(paginatedHours);
  }, [currentPage, hoursPerPage, startingHour, setPaginatedHours]); // Include startingHour as a dependency

  const handlePageChange = (direction: 'next' | 'prev') => {
    setCurrentPage((prev) =>
      direction === 'next'
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  const handleStartingHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1 || value > totalHours) return;

    setSettingsState((prev) => ({
      ...prev,
      startingHour: value,
    }));
    setCurrentPage(1); // Reset to page 1 when starting hour changes
  };

  const handleHoursPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSettingsState((prev) => ({
      ...prev,
      hoursPerPage: parseInt(e.target.value, 10) as hoursPerPageOptions,
    }));
    setCurrentPage(1); // Reset to page 1 after change
  };

  return (
    <div className="page-controls">
      {showControls && (
        <>
          <div className="hoursPerPage-container">
            <label htmlFor="hoursPerPage">Hours per page:</label>
            <select
              id="hoursPerPage"
              value={hoursPerPage}
              onChange={handleHoursPerPageChange}
              className="input hour-select"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={200}>All</option>
            </select>
          </div>
          <div className="startingHour-container">
            <label>Start on hour:</label>
            <input
              type="number"
              id="startingHour"
              className="input"
              min={1}
              max={totalHours}
              value={startingHour}
              onChange={handleStartingHourChange}
            />
          </div>
        </>
      )}
      {hoursPerPage !== 200 && (
        <div className="controls-container">
          <button
            className="submit-btn"
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="submit-btn"
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PageControls;
