import { publicLinks } from './utils';
import NavItem from '../components/NavItem';

interface PublicNavLinksProps {
  closeMenu: () => void;
}

const PublicNavLinks: React.FC<PublicNavLinksProps> = ({ closeMenu }) => {
  return (
    <>
      {publicLinks.map((link) => (
        <NavItem key={link.href} {...link} closeMenu={closeMenu} />
      ))}
    </>
  );
};

export default PublicNavLinks;
