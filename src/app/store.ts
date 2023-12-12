import { configureStore } from '@reduxjs/toolkit';

import { ErrorMiddleWare } from '../middlewares';
import { apiSlice } from '../services/apiSlice';
import authReducer from '../services/auth/authSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = getDefaultMiddleware().concat(apiSlice.middleware);
    return customMiddleware.concat(ErrorMiddleWare);
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
