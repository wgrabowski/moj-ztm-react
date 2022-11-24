import { configureStore } from '@reduxjs/toolkit';
import { ztmApi, ztmApi2 } from './ztmApi';

export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[ztmApi.reducerPath]: ztmApi.reducer,
		[ztmApi2.reducerPath]: ztmApi2.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ztmApi.middleware, ztmApi2.middleware),
});
