import { ztmApi, ztmApi2 } from './ztm-api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [ztmApi.reducerPath]: ztmApi.reducer,
    [ztmApi2.reducerPath]: ztmApi2.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ztmApi.middleware, ztmApi2.middleware),
});
