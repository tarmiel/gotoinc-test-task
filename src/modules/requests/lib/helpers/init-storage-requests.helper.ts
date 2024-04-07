import { StorageKey, storage } from '@/lib/storage';
import { checkIsBrowser } from '@/lib/utils';
import { Request } from '../types';

export const initStorageRequests = (): Request[] => {
	if (!checkIsBrowser()) {
		return [];
	}

	const data = storage.get(StorageKey.REQUESTS);

	return data ? (JSON.parse(data) as Request[]) : [];
};
