import React from 'react';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const onSubmit = e => {
    e.preventDefault();
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
