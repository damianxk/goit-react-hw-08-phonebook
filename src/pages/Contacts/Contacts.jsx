import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components';
import { Filter } from 'components';
import { Blocks } from 'react-loader-spinner';
import { ContactList } from 'components';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>PhoneBook - Contacts</title>
      </Helmet>
      <div className={css.container}>
        <h2 className={css.header}>Contacts</h2>
        <div className={css.contactsBox}>
          <ContactForm />
          {contacts <= 0 ? (
            <p className={css.info}>Add your first contact!</p>
          ) : (
            <Filter />
          )}
          {isLoading && (
            <div className={css.centred}>
              <Blocks />
            </div>
          )}
          {error && (
            <div className={css.centred}>
              <b>{error}</b>
            </div>
          )}
          {contacts && <ContactList />}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Contacts;
