import React from 'react';

import css from './HomePage.module.css';

export class HomePage extends React.Component {
  render() {
    return (
      <h1 className={css.homeHeader}>
        Welcome to the phone contact storage app. Please register or log in to
        your account.
      </h1>
    );
  }
}

export default HomePage;
