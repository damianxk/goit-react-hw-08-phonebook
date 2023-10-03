import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectEditStatus,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { setEdit } from 'redux/contacts/editSlice';
import { EditWindow } from 'components/Edit/Edit';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isEditing = useSelector(selectEditStatus);

  const handleDelete = id => dispatch(deleteContact(id));
  const handleEdit = (id, name, number) => {
    const status = true;
    dispatch(setEdit({ status, id, name, number }));
  };

  return (
    <>
      {isEditing && <EditWindow />}
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <div className={css.text}>😎 {name}</div>
            <div className={css.text}>☎️ {number}</div>
            <div className={css.buttons}>
              <button
                onClick={() => handleEdit(id, name, number)}
                type="button"
                className={css.formButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(id)}
                type="button"
                className={css.formButton}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
