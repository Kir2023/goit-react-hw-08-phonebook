import React from 'react';

import css from './HomePage.module.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div className={css.homeTextContainer}>
        <p className={css.homeText}>
          Welcome to the phone contact storage app. Please register or log in to
          your account.
        </p>
        <p className={css.homeText}>
          After this, you can create your own contact book.
        </p>
      </div>
    );
  }
}

export default HomePage;
