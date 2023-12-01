import React from 'react';
import { useDispatch } from 'react-redux';

import { loginThunk } from 'redux/auth.reducer';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <div className={css.loginForm}>
      <form onSubmit={onSubmit}>
        <label>
          <p className={css.loginText}>Email:</p>
          <input
            className={css.loginInput}
            type="email"
            placeholder="Enter email"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p className={css.loginText}>Password:</p>
          <input
            className={css.loginInput}
            type="password"
            placeholder="Enter password"
            required
            name="userPassword"
            minLength={7}
          />
        </label>
        <br />
        <button type="submit" className={css.loginBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
