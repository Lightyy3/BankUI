import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import { convertApi } from "./convert"; // Import your new API

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [convertApi.reducerPath]: convertApi.reducer, // Add the new API reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, convertApi.middleware), // Add new API middleware
});
