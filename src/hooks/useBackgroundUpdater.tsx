import { SettingsState } from '@/context/settings/SettingsProvider';
import { useEffect } from 'react';

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
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSettingsState((prev) => ({
        ...prev,
        currentPageBackground: backgroundMap[backgroundKey],
      }));
    }, 500);
    return () => clearTimeout(timeout);
  }, [backgroundKey, backgroundMap, setSettingsState]);
};

export default useBackgroundUpdater;
