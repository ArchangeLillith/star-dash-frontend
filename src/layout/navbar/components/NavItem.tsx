import { Link } from 'react-router-dom';

interface NavItemProps {
  href: string;
  text: string;
  closeMenu: () => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, closeMenu }) => {
  return (
    <li className={`nav-item`}>
      <Link className={`nav-link`} to={href} onClick={closeMenu}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
