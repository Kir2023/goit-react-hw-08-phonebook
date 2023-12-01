import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
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
          to="/register"
        >
          Register
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
          to="/contacts"
        >
          Contacts
        </NavLink>
      </header>
      <main className={css.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
