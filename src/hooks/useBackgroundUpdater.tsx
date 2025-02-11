import { SettingsState } from '@/context/settings/settingsProvider.utils';
import { useState, useEffect } from 'react';

type BackgroundMap = Record<string, string>;

interface UseBackgroundUpdaterProps {
  backgroundKey: string;
  backgroundMap: BackgroundMap;
  setSettingsState: React.Dispatch<React.SetStateAction<SettingsState>>;
}

const useBackgroundUpdater = ({
  backgroundKey,
  backgroundMap,
  setSettingsState,
}: UseBackgroundUpdaterProps) => {
  const [previousBackground, setPreviousBackground] = useState<string | null>(
    null
  );
  const [currentBackground, setCurrentBackground] = useState(
    backgroundMap[backgroundKey]
  );

  useEffect(() => {
    // Save the current background as previous before updating
    setPreviousBackground(currentBackground);
    setCurrentBackground(backgroundMap[backgroundKey]);

    // Update settings state with the new background after a delay
    const timeout = setTimeout(() => {
      setSettingsState((prev: SettingsState) => ({
        ...prev,
        currentPageBackground: backgroundMap[backgroundKey],
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [backgroundKey, backgroundMap, setSettingsState, currentBackground]);

  return { previousBackground, currentBackground };
};

export default useBackgroundUpdater;
