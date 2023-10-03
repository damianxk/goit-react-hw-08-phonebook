import { createSlice } from '@reduxjs/toolkit';

const showContactFormInitialState = false;

const showContactFormSlice = createSlice({
  name: 'showContactForm',
  initialState: showContactFormInitialState,
  reducers: {
    setShowContactForm(_, action) {
      return action.payload;
    },
  },
});

export const { setShowContactForm } = showContactFormSlice.actions;
export const showContactFormReducer = showContactFormSlice.reducer;
