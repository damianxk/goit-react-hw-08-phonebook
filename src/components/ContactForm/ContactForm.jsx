import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectShowContactForm,
} from 'redux/contacts/selectors';
import { setShowContactForm } from 'redux/contacts/showContactFormSlice';
import { Notify } from 'notiflix';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const showContactsForm = useSelector(selectShowContactForm);

  const handleSubmit = e => {
    e.preventDefault();

    const addContactForm = e.currentTarget;
    const name = addContactForm.elements.name.value;
    const number = addContactForm.elements.number.value;

    const newContact = { name, number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      addContactForm.reset();
      return Notify.info(
        `${newContact.name} is already in contacts! You can edit it.`
      );
    }

    dispatch(addContact(newContact));
    dispatch(setShowContactForm(!showContactsForm));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={css.formInput}
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            className={css.formInput}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};
