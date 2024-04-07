'use client';

import { useCallback } from 'react';

import { useAppDispatch } from '@/lib/hooks';
import { RequestType, requestActions, type Request } from '@/modules/requests';
import { RequestForm } from './request-form';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/providers/auth';
import { type RequestFormData } from './lib/types';

type CreateOrderFormProps = {
	onSuccess?: () => void;
};

export function CreateOrderForm({ onSuccess }: CreateOrderFormProps) {
	const dispatch = useAppDispatch();
	const { userId } = useAuth();

	const handleSubmit = useCallback(
		(formData: RequestFormData) => {
			const newRequest: Request = {
				id: uuidv4(),
				userId: userId as string,
				createdAt: Date.now(),
				requestType: RequestType.ORDER,
				from: formData.from,
				to: formData.to,
				dispatchDate: +formData.dispatchDate,
				...(formData.requestType === RequestType.ORDER
					? {
							parcelType: formData.parcelType,
							parcelDescription: formData.parcelDescription,
						}
					: {}),
			};

			dispatch(requestActions.createRequest(newRequest));

			onSuccess?.();
		},
		[userId, dispatch, onSuccess]
	);

	return (
		<RequestForm
			requestType={RequestType.ORDER}
			onSubmit={handleSubmit}
			actionText={'Create order'}
		/>
	);
}
