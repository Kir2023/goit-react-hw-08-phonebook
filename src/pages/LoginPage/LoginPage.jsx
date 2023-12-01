import React from 'react';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const onSubmit = e => {
    e.preventDefault();
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
