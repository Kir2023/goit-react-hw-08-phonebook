import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthenticated } from 'redux/selectors';

import css from './Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <header className={css.header}>
        {authenticated ? (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
            <div>
              <UserMenu />
            </div>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </header>
      <main className={css.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
