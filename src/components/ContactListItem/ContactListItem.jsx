import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { deleteContact } from 'redux/operations';

import BtnLoader from 'components/BtnLoader/BtnLoader';

import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = id => {
    setIsLoading(true);
    dispatch(deleteContact(id))
      .then(() => {
        setIsLoading(false);
        alert(`${name} succesfuly deleted`);
      })
      .catch(error => {
        setIsLoading(false);
        alert(`Error deleting contact: ${error}`);
      });
  };

  return (
    <li className={css.contactItem}>
      <span className={css.contactTxt}>{name}</span> :{' '}
      <span className={css.contactTxt}>{phone}</span>
      <button onClick={handleDelete} type="button" className={css.deleteBtn}>
        {isLoading ? <BtnLoader /> : 'Delete'}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
