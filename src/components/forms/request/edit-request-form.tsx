'use client';

import { useCallback } from 'react';

import { useAppDispatch } from '@/lib/hooks';
import { RequestType, requestActions, type Request } from '@/modules/requests';
import { RequestForm } from './request-form';
import { type RequestFormData } from './lib/types';

type EditRequestFormProps = {
	request: Request;
	onSuccess?: () => void;
};

export function EditRequestForm({ request, onSuccess }: EditRequestFormProps) {
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(formData: RequestFormData) => {
			const updatedRequest: Partial<Request> = {
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

			dispatch(
				requestActions.editRequest({
					requestId: request.id,
					data: updatedRequest,
				})
			);

			onSuccess?.();
		},
		[request, dispatch, onSuccess]
	);

	return (
		<RequestForm
			requestType={request.requestType}
			onSubmit={handleSubmit}
			defaultValues={{
				dispatchDate: new Date(request.dispatchDate),
				from: request.from,
				to: request.to,
				parcelDescription: request.parcelDescription,
				parcelType: request.parcelType,
			}}
		/>
	);
}
