import Notiflix from 'notiflix';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/operations';
import { selectError } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchContacts())
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        Notiflix.Notify.failure(`Error: ${error}`);
      });
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
