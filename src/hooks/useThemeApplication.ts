import { EThemeNames } from '@/context/settings/settingsProvider.utils';
import { useEffect } from 'react';

const useThemeAplication = (theme: EThemeNames) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    // Remove any previously set theme class
    htmlElement.className = `theme-${theme}`;
  }, [theme]);
};
export default useThemeAplication;
