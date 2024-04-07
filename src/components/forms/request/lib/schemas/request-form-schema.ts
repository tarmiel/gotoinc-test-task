import { z } from 'zod';
import { ParcelType, RequestType } from '@/modules/requests';

const baseRequestFormSchema = z.object({
	from: z.string().min(1).max(50),
	to: z.string().min(1).max(50),
	dispatchDate: z.date().min(new Date()),
});

const orderFormSchema = baseRequestFormSchema.extend({
	requestType: z.literal(RequestType.ORDER),
	parcelType: z.nativeEnum(ParcelType),
	parcelDescription: z.string().min(0).max(160),
});

const deliveryFormSchema = baseRequestFormSchema.extend({
	requestType: z.literal(RequestType.DELIVERY),
});

export const requestFormSchema = orderFormSchema.or(deliveryFormSchema);
