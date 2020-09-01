import { configureStore } from '@reduxjs/toolkit';

import countReducer from './slices/countSlice';
import randomUsersReducer from './slices/randomUsersSlice';

export default configureStore({
  reducer: {
    count: countReducer,
    randomUsers: randomUsersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
});
