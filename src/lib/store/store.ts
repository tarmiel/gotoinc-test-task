'use client';

import { configureStore } from '@reduxjs/toolkit';
import { requestReducer } from '@/modules/requests';

export const store = configureStore({
	reducer: {
		requests: requestReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
