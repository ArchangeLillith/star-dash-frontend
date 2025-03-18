import { AuthContext } from '@/context/auth/AuthProvider';
import { useContext } from 'react';
import NavItem from '../components/NavItem';
import { defaultLinks, getMultiEventLinks } from './utils';
import { EventsContext } from '@/context/events/EventsProvider';
import { SettingsContext } from '@/context/settings/SettingsProvider';
import { DefaultSettings } from '@/context/settings/settingsProvider.utils';
import { useNavigate } from 'react-router-dom';

interface AuthenticatedNavLinksParams {
  selectionMode: boolean;
  confirmEventChange: () => void;
  closeMenu: () => void;
}

const AuthenticatedNavLinks: React.FC<AuthenticatedNavLinksParams> = ({
  closeMenu,
}) => {
  const { eventsState } = useContext(EventsContext);
  const { logoutFromAuthState } = useContext(AuthContext);
  const { setSettingsState } = useContext(SettingsContext);
  const navigate = useNavigate();
  const navLinks = defaultLinks;
  const totalEvents =
    (eventsState.activeEvents?.length || 0) +
    (eventsState.archivedEvents?.length || 0);

  if (totalEvents > 1) {
    navLinks.push(...getMultiEventLinks());
  }
  const logOut = () => {
    logoutFromAuthState();
    setSettingsState(DefaultSettings);
    navigate('/');
  };

  return (
    <>
      {navLinks.map((link) => (
        <NavItem key={link.href} {...link} closeMenu={closeMenu} />
      ))}
      <button onClick={logOut} className="submit-btn logout">
        Logout
      </button>
    </>
  );
};

export default AuthenticatedNavLinks;
