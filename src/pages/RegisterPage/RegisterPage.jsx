import React from 'react';

import { useDispatch } from 'react-redux';

import css from './RegisterPage.module.css';
import { registerThunk } from 'redux/auth.reducer';

const RegisterPage = () => {
  const dispatch = useDispatch();

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

    dispatch(registerThunk(formData));
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
