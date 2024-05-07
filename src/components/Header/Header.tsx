/* eslint-disable no-console */
import './Header.css';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoutIconBlack from '../../images/icon_logout_black.svg';
import logoutIconWhite from '../../images/icon_logout_white.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  userName?: string;
}

function Header({
  isLoggedIn,
  setIsLoggedIn,
  userName = '',
}: HeaderProps): ReactElement {
  const onLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const backgroundIsLight = useLocation().pathname === '/saved-news';

  return (
    <header className={`header ${backgroundIsLight ? 'light-bg' : ''}`}>
      <h1 className={`header__title ${backgroundIsLight ? 'light-bg' : ''}`}>
        NewsExplorer
      </h1>
      <div className="header__button-group">
        <NavLink
          to="/"
          className={`header__nav-item header__button ${backgroundIsLight ? 'light-bg' : 'button-active'}`}
          role="button"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/saved-news"
            className={`header__nav-item header__button ${backgroundIsLight ? 'light-bg button-active' : ''}`}
            role="button"
          >
            Saved Articles
          </NavLink>
        )}
        <button
          className={`header__border-button ${backgroundIsLight ? 'light-bg' : ''}`}
          type="button"
          onClick={onLoginClick}
        >
          <p
            className={`header__button-text ${backgroundIsLight ? 'light-bg' : ''}`}
          >
            {isLoggedIn ? userName : 'Sign In'}
          </p>
          <img
            src={backgroundIsLight ? logoutIconBlack : logoutIconWhite}
            alt="logout icon"
            className="header__logout-icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
