/* eslint-disable no-console */
import './Header.css';
import { Dispatch, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../images/icon_logout.svg';

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
  // const onLoginClick = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };

  const loggedInHeader = (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__button-group">
        <NavLink className="header__nav-item header__button" role="button">
          Home
        </NavLink>
        <NavLink
          className="header__nav-item header__button button-active"
          role="button"
        >
          Saved Articles
        </NavLink>
        <button className="header__border-button" type="button">
          <p className="header__button-text">{userName}</p>
          <img
            src={logoutIcon}
            alt="logout icon"
            className="header__logout-icon"
          />
        </button>
      </div>
    </header>
  );

  const loggedOutHeader = (
    <div className="header">
      <h1>NewsExplorer</h1>
      <button type="button">Home</button>
      <button type="button">Sign In</button>
    </div>
  );

  return isLoggedIn ? loggedInHeader : loggedOutHeader;
}

export default Header;
