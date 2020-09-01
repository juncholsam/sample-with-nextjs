import { createSlice } from '@reduxjs/toolkit';

import { loadRandomUsers } from './thunks';

export const initialState = {
  users: [],
  loading: 'idle',
};

const countSlice = createSlice({
  name: 'randomUsers',
  initialState,
  reducers: {},
  extraReducers: {
    [loadRandomUsers.pending]: (draft) => {
      draft.users = [];
      draft.loading = 'loading';
    },
    [loadRandomUsers.fulfilled]: (draft, action) => {
      const { results = [] } = action.payload;
      draft.users = results;
      draft.loading = 'loaded';
    },
    [loadRandomUsers.rejected]: (draft, action) => {
      draft.loading = 'error';
      draft.error = action.payload.error;
    },
  },
});

export const { reducer, actions } = countSlice;
