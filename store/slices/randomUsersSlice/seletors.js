import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.randomUsers || initialState;

export const selectLoading = createSelector([selectDomain], (state) => state.loading);

export const selectUsers = createSelector([selectDomain], (state) => state.users);

export default selectDomain;
