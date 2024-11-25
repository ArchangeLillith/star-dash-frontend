import { publicLinks } from './utils';
import NavItem from '../components/NavItem';

const PublicNavLinks = () => {
  return (
    <>
      {publicLinks.map((link) => (
        <NavItem key={link.href} {...link} />
      ))}
    </>
  );
};

export default PublicNavLinks;
