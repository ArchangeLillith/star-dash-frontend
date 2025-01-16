import { AuthContext } from '@/context/auth/AuthProvider';
import { useContext } from 'react';
import NavItem from '../components/NavItem';
import { getMultiEventLinks, getNoEventLinks } from './utils';

interface AuthenticatedNavLinksParams {
  selectionMode: boolean;
  confirmEventChange: () => void;
  closeMenu: () => void;
}

const AuthenticatedNavLinks: React.FC<AuthenticatedNavLinksParams> = ({
  closeMenu,
}) => {
  const { authState, logoutFromAuthState } = useContext(AuthContext);
  const navLinks = [];
  const totalEvents =
    (authState.activeEvents?.length || 0) +
    (authState.archivedEvents?.length || 0);

  if (totalEvents === 0) {
    navLinks.push(...getNoEventLinks());
  } else if (totalEvents > 1) {
    navLinks.push(...getMultiEventLinks());
  }

  // if (authState.managerData) {
  //   navLinks.push(...getAdminLinks());
  // }

  return (
    <>
      {navLinks.map((link) => (
        <NavItem key={link.href} {...link} closeMenu={closeMenu} />
      ))}
      <button onClick={logoutFromAuthState}>Logout</button>
    </>
  );
};

export default AuthenticatedNavLinks;
