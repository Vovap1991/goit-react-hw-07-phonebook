const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
