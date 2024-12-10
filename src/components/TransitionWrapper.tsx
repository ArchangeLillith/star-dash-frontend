import React, { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../context/settings/SettingsProvider';

interface TransitionWrapperProps {
  newBackgroundImage: string;
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  newBackgroundImage,
  children,
}) => {
  const [showContent, setShowContent] = useState(false);
  const { settingsState } = useContext(SettingsContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="transition-wrapper"
      style={{ backgroundImage: `url(${settingsState.currentPageBackground})` }}
    >
      {/* New sliding background */}
      <div
        className="background-slide"
        style={{ backgroundImage: `url(${newBackgroundImage})` }}
      ></div>

      {/* Page content */}
      {showContent && <div className="page-content">{children}</div>}
    </div>
  );
};

export default TransitionWrapper;
