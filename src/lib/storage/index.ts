import { BaseStorage } from './storage';

const storage = new BaseStorage(globalThis.localStorage);

export { storage };
export { StorageKey } from './lib/enums';
