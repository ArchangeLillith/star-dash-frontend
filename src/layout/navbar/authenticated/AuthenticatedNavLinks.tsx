import NavItem from '../components/NavItem';
import { getAdminLinks, getMultiEventLinks, getNoEventLinks } from './utils';

interface AuthenticatedNavLinksParams {
  selectionMode: boolean;
  confirmEventChange: () => void;
  closeMenu: () => void;
  user: {
    loggedIn: boolean;
    registeredEvents: { event: string; leadManager: string }[];
    event: string;
    leadManager: boolean;
    siteAdmin: boolean;
  };
}

const AuthenticatedNavLinks: React.FC<AuthenticatedNavLinksParams> = ({
  user,
  closeMenu,
}) => {
  const navLinks = [];
  if (user.registeredEvents.length === 0) {
    navLinks.push(...getNoEventLinks());
  } else if (user.registeredEvents.length > 1 && user.event) {
    navLinks.push(...getMultiEventLinks());
  }

  if (user.siteAdmin) {
    navLinks.push(...getAdminLinks());
  }

  return (
    <>
      {navLinks.map((link) => (
        <NavItem key={link.href} {...link} closeMenu={closeMenu} />
      ))}
    </>
  );
};

export default AuthenticatedNavLinks;
