import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStaus: (state) => {
      state.categories = 'under construction';
    },
  },
});

export default categoriesSlice.reducer;
