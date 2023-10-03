import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import {
  selectIdToEdit,
  selectNameToEdit,
  selectNumberToEdit,
} from 'redux/contacts/selectors';
import { setEdit } from 'redux/contacts/editSlice';
import css from './Edit.module.css';

export const EditWindow = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectIdToEdit);
  const nameToEdit = useSelector(selectNameToEdit);
  const numberToEdit = useSelector(selectNumberToEdit);

  const handleSubmit = e => {
    e.preventDefault();

    const editContactForm = e.currentTarget;
    const name = editContactForm.elements.name.value;
    const number = editContactForm.elements.number.value;

    const contact = { name, number };

    dispatch(editContact({ id, contact }));
    dispatch(setEdit({ status: false, id: null, name: null, number: null }));
  };

  const handleNameChange = e => {
    dispatch(
      setEdit({
        status: true,
        id,
        name: e.target.value,
        number: numberToEdit,
      })
    );
  };

  const handleNumberChange = e => {
    dispatch(
      setEdit({
        status: true,
        id,
        name: nameToEdit,
        number: e.target.value,
      })
    );
  };

  const cancelEditing = () => {
    dispatch(setEdit({ status: false, id: null, name: null, number: null }));
  };

  return (
    <div className={css.modal}>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.edit}>
          <h4>EDIT CONTACT</h4>
          <button
            type="button"
            className={css.formButton}
            onClick={cancelEditing}
          >
            Close
          </button>
          <label className={css.formLabel}>
            Name
            <input
              type="text"
              name="name"
              className={css.formInput}
              value={nameToEdit}
              onChange={e => handleNameChange(e)}
              required
            />
          </label>
          <label className={css.formLabel}>
            Number
            <input
              type="tel"
              name="number"
              className={css.formInput}
              value={numberToEdit}
              onChange={e => handleNumberChange(e)}
              required
            />
          </label>
          <button type="submit" className={css.formButton}>
            Edit contact
          </button>
        </form>
      </div>
    </div>
  );
};
