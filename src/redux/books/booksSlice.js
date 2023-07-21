import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aDqZ6eCZp1GfaZZvdWPr/books';

export const apiData = createAsyncThunk('books/apiData', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los datos de la API');
  }
});

export const apiPost = createAsyncThunk('books/apiPost', async (newBook) => {
  try {
    const response = await axios.post(apiUrl, newBook);
    return (response.data === 'Created') ? newBook : null;
  } catch (error) {
    throw new Error('Error al obtener los datos de la API');
  }
});

export const apiErase = createAsyncThunk('books/apiErase', async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return (response.data === 'The book was deleted successfully!') ? id : null;
  } catch (error) {
    throw new Error('Error al obtener los datos de la API');
  }
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload === '' || action.payload === undefined) return;
        const booksFormatted = Object.keys(action.payload).map((key) => ({
          item_id: key,
          title: action.payload[key][0].title,
          author: action.payload[key][0].author,
          category: action.payload[key][0].category,
        }));
        state.books = booksFormatted;
      })
      .addCase(apiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(apiPost.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) state.books.push(action.payload);
      })
      .addCase(apiErase.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiErase.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) {
          state.books = state.books.filter((book) => book.item_id !== action.payload);
        }
      });
  },
});

export default booksSlice.reducer;
