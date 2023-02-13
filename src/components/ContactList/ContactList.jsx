import propTypes from 'prop-types';
import  './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
 
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};