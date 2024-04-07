import { ValueOf } from '@/lib/types';
import { StorageKey } from './lib/enums';

class BaseStorage {
	private store: globalThis.Storage;

	public constructor(store: globalThis.Storage) {
		this.store = store;
	}

	public drop(key: ValueOf<typeof StorageKey>) {
		return this.store.removeItem(key as string);
	}

	public get<R = string>(key: ValueOf<typeof StorageKey>) {
		return this.store.getItem(key as string) as R | null;
	}

	public async has(key: ValueOf<typeof StorageKey>) {
		const value = this.get(key);

		return Boolean(value);
	}

	public set(key: ValueOf<typeof StorageKey>, value: string) {
		return this.store.setItem(key as string, value);
	}
}

export { BaseStorage };
