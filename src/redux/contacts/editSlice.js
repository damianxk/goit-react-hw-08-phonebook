import { createSlice } from '@reduxjs/toolkit';

const editInitialState = {
  status: false,
  idToEdit: null,
  nameToEdit: null,
  numberToEdit: null,
};

const editSlice = createSlice({
  name: 'edit',
  initialState: editInitialState,
  reducers: {
    setEdit(state, action) {
      state.status = action.payload.status;
      state.idToEdit = action.payload.id;
      state.nameToEdit = action.payload.name;
      state.numberToEdit = action.payload.number;
    },
  },
});

export const { setEdit } = editSlice.actions;
export const editReducer = editSlice.reducer;
