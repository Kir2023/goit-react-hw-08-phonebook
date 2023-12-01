import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserData } from 'redux/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const userData = useSelector(selectUserData);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{userData.name}</p>
      <button type="button" className={css.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
