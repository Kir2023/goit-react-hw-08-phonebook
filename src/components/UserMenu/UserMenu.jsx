import React from 'react';

import css from './UserMenu.module';

const UserMenu = () => {
  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" className={css.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
