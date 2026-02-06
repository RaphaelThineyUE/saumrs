import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          S.A.U.M.R.S
        </Link>
        <div className="header-icons">
          <Link to="/order" className="cart-icon" aria-label="Shopping cart">
            🛒
            <span className="cart-count">0</span>
          </Link>
          <div className="search-icon" aria-hidden="true"></div>
        </div>
      </header>

      <div
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>

      <div className={`sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>
          MAIN
        </Link>
        <Link to="/five-pillars" onClick={handleLinkClick}>
          FIVE PILLARS
        </Link>
        <Link to="/ingredients" onClick={handleLinkClick}>
          INGREDIENTS
        </Link>
        <Link to="/protein" onClick={handleLinkClick}>
          PROTEIN
        </Link>
        <Link to="/subscriptions" onClick={handleLinkClick}>
          SUBSCRIPTIONS
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          CONTACT
        </Link>
      </div>
    </>
  );
};
