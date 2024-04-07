'use client';

import { CreateDeliveryForm } from '@/components/forms/request/create-delivery-form';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/toaster';
import { useAuth } from '@/providers/auth';

export default function CreateDeliveryPage() {
	const { userId } = useAuth();
	const router = useRouter();

	const handleSuccessCreate = () => {
		toast.success('Delivery request was created successfully!');

		router.push(`/${userId}/requests`);
	};

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center justify-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>
					Create delivery request
				</h1>
			</div>
			<div className='flex flex-1 justify-center rounded-lg border border-dashed shadow-sm pt-12'>
				<CreateDeliveryForm onSuccess={handleSuccessCreate} />
			</div>
		</main>
	);
}
