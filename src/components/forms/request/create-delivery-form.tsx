'use client';

import { useAppDispatch } from '@/lib/hooks';
import { Request, RequestType, requestActions } from '@/modules/requests';
import { useCallback } from 'react';
import { RequestForm } from './request-form';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/providers/auth';
import { type RequestFormData } from './lib/types';

type CreateDeliveryFormProps = {
	onSuccess?: () => void;
};

export function CreateDeliveryForm({ onSuccess }: CreateDeliveryFormProps) {
	const dispatch = useAppDispatch();
	const { userId } = useAuth();

	const handleSubmit = useCallback(
		(formData: RequestFormData) => {
			const newRequest: Request = {
				id: uuidv4(),
				userId: userId as string,
				createdAt: Date.now(),
				requestType: RequestType.DELIVERY,
				from: formData.from,
				to: formData.to,
				dispatchDate: +formData.dispatchDate,
			};

			dispatch(requestActions.createRequest(newRequest));

			onSuccess?.();
		},
		[userId, dispatch, onSuccess]
	);

	return (
		<RequestForm
			requestType={RequestType.DELIVERY}
			onSubmit={handleSubmit}
			actionText={'Create delivery'}
		/>
	);
}
