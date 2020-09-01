import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.count || initialState;

export const selectValue = createSelector([selectDomain], (state) => state.value);

export default selectDomain;
