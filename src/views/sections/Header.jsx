import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../images/logo/silicon-logo-light_theme.svg'

const Header = ({ showShadow }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleNavLinkClick = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  return (
    <header className={`header-differential ${showShadow ? 'show-shadow' : ''}`}>
      <div className="container">
        <Link id="logo" to="/">
          <img src={Logo} alt="silicon logotype" />
        </Link>

        <nav id="menu" style={{ display: isMenuVisible ? 'block' : 'none' }}>
          <div className="menu-links">
            <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>Overview</NavLink>
            <NavLink className="nav-link" to="/#features" onClick={handleNavLinkClick}>Features</NavLink>
            <NavLink className="nav-link" to="/news" onClick={handleNavLinkClick}>News</NavLink>
            <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
          </div>
        </nav>

        <div id="theme-mode">
          <div className="theme-switch-wrapper">
            <label htmlFor="theme-toggle-switch">Light</label>
            <label className="theme-switch" htmlFor="theme-toggle-switch">
              <input type="checkbox" id="theme-toggle-switch" />
              <div className="slider round"></div>
            </label>
            <label htmlFor="theme-toggle-switch">Dark</label>
          </div>
        </div>

        <Link id="btn-account" className="btn btn-theme" to="/signin">
          <i className="fa-regular fa-user"></i> Sign in / up
        </Link>

        <button id="btn-menu" className={isMenuVisible ? 'toggled' : ''} onClick={toggleMenu}>
          <i className="fa-regular fa-bars"></i>
        </button>

      </div>
    </header>
  )
}

export default Header