import Notiflix from 'notiflix';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from 'redux/selectors';
import { logoutThunk } from 'redux/auth.reducer';

import BtnLoader from 'components/BtnLoader/BtnLoader';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logoutThunk())
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        Notiflix.Notify.failure(`Error: ${error}`);
      });
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{userData.email}</p>
      <button type="button" className={css.logoutButton} onClick={handleLogout}>
        {isLoading ? <BtnLoader /> : 'Logout'}
      </button>
    </div>
  );
};

export default UserMenu;
