import Notiflix from 'notiflix';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerThunk } from 'redux/auth.reducer';

import BtnLoader from 'components/BtnLoader/BtnLoader';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    setIsLoading(true);
    dispatch(registerThunk(formData))
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        Notiflix.Notify.failure(`Error deleting contact: ${error}`);
      });
  };

  return (
    <div className={css.registerForm}>
      <form onSubmit={onSubmit}>
        <label>
          <p className={css.registerText}>Name:</p>
          <input
            className={css.registerInput}
            type="text"
            placeholder="Enter name"
            required
            name="userName"
          />
        </label>
        <label>
          <p className={css.registerText}>Email:</p>
          <input
            className={css.registerInput}
            type="email"
            placeholder="Enter email"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p className={css.registerText}>Password:</p>
          <input
            className={css.registerInput}
            type="password"
            placeholder="Enter password"
            required
            name="userPassword"
            minLength={7}
          />
        </label>
        <br />
        <button type="submit" className={css.registerBtn}>
          {isLoading ? <BtnLoader /> : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
