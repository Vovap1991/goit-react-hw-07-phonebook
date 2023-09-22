import { ContactForm } from './Form/Form';
import { Application, FormTitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Application>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm></ContactForm>
      <hr />
      <FormTitle>Contacts</FormTitle>
      <Filter />
      <ContactList />
    </Application>
  );
};
