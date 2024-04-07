import { ValueOf } from '@/lib/types';
import { ParcelType, RequestType } from '../enums';

export type Request = {
	id: string;
	requestType: ValueOf<typeof RequestType>;
	from: string;
	to: string;
	dispatchDate: number;
	createdAt: number;
	userId: string;
	parcelType?: ValueOf<typeof ParcelType>;
	parcelDescription?: string;
};
