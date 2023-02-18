import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
    id:nanoid(),
    name,
    number,
  };
   const isExist = contacts.some(i => 
       (i.name === contact.name.toLowerCase() &&
        i.number === contact.number) || i.number === contact.number);
        // console.log(isExist)
        if (isExist) {
          return alert(`${name} is already in contacts`)
        }
   
        setContacts([contact, ...contacts]);
    
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

//  const findContacts = useMemo(() => {
//     console.log('фильтруем друзей' + Date.now());
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   },[contacts, filter]);

  const findContacts = () => {
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList contacts={findContacts()} deleteContact={deleteContact} />
    </section>
  );
};

 
  
  
