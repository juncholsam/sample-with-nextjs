import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
};

const countSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    addCount(draft) {
      draft.value += 1;
    },
    subtractCount(draft) {
      draft.value -= 1;
    },
    resetCount(draft) {
      draft.value = 0;
    },
  },
});

export const { reducer, actions } = countSlice;
