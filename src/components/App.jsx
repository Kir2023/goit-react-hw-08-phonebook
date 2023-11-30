import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectError } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
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
        alert(`Error: ${error}`);
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
