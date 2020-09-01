import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadRandomUsers = createAsyncThunk('randomUsers/loadRandomUsers', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://randomuser.me/api?results=50');
    return response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});
