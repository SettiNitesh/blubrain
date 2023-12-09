import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../services/apiSlice";
import { ErrorMiddleWare } from "../middlewares";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = getDefaultMiddleware().concat(apiSlice.middleware);
    return customMiddleware.concat(ErrorMiddleWare);
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
