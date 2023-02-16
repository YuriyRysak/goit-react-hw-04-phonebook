import {useState} from "react";
import PropTypes from 'prop-types';
import './ContactForm.module.css';
// import { Formik } from "formik";

export const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
  
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
  
          default: alert('error');
            return;
              
        }
  
      };
    
   


    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
       
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"                 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
         />
         <input
            
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        <button type="submit">
            add contact
        </button>
    </form>
    )

}

ContactForm.prototypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
