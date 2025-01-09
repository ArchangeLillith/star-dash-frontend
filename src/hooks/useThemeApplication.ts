import { EThemeNames } from '@/context/settings/settings.utils';
import { useEffect } from 'react';

const useThemeAplication = (theme: EThemeNames) => {
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Remove any previously set theme class
    htmlElement.className = `theme-${theme}`;

    // Clean-up to remove the class when the component unmounts
    return () => {
      htmlElement.className = '';
    };
  }, [theme]);
};
export default useThemeAplication;
