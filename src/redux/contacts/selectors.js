import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectEditStatus = state => state.edit.status;

export const selectIdToEdit = state => state.edit.idToEdit;

export const selectNameToEdit = state => state.edit.nameToEdit;

export const selectNumberToEdit = state => state.edit.numberToEdit;

export const selectShowContactForm = state => state.showContactForm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
