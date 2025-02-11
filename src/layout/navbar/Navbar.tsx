import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedNavLinks from './authenticated/AuthenticatedNavLinks';
import PublicNavLinks from './public/PublicNav';
import { AuthContext } from '@/context/auth/AuthProvider';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { authState } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-burger-container">
          <Link to="/" className="navbar-logo-link">
            <picture>
              <source
                srcSet="/images/Logo/SD-logo.png"
                media="(max-width: 768px)"
              />
              <img
                className="navbar-logo"
                src="/images/Logo/logo.png"
                alt="SD logo"
                id="nav-logo"
              />
            </picture>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="navbar-toggler"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`navbar-collapse ${
            isMobileMenuOpen ? 'navbar-collapse--open' : ''
          }`}
        >
          <ul className="navbar-nav">
            {authState.authenticated ? (
              <AuthenticatedNavLinks
                closeMenu={closeMobileMenu}
                selectionMode={false}
                confirmEventChange={closeMobileMenu}
              />
            ) : (
              <PublicNavLinks closeMenu={closeMobileMenu} />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
