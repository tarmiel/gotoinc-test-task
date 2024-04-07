import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StorageKey, storage } from '@/lib/storage';
import { Request } from './lib/types';
import { initStorageRequests } from './lib/helpers';

type State = {
	requests: Request[];
};

const initialState: State = {
	requests: initStorageRequests(),
};

const { actions, reducer } = createSlice({
	initialState,
	name: 'requests',
	reducers: {
		createRequest: (state, action: PayloadAction<Request>) => {
			const request = action.payload;
			const requests = [...state.requests, request];

			state.requests = requests;

			storage.set(StorageKey.REQUESTS, JSON.stringify(requests));
		},
		editRequest: (
			state,
			action: PayloadAction<{
				requestId: Request['id'];
				data: Partial<Request>;
			}>
		) => {
			const { requestId, data } = action.payload;
			const requests = state.requests.map(request =>
				request.id === requestId ? { ...request, ...data } : request
			);

			state.requests = requests;

			storage.set(StorageKey.REQUESTS, JSON.stringify(requests));
		},
		deleteRequest: (state, action: PayloadAction<Request['id']>) => {
			const requestId = action.payload;
			const requests = state.requests.filter(
				request => request.id !== requestId
			);

			state.requests = requests;

			storage.set(StorageKey.REQUESTS, JSON.stringify(requests));
		},
	},
});

export { actions, reducer };
