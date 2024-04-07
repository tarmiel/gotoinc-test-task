'use client';

import { useRouter } from 'next/navigation';

import { CreateOrderForm } from '@/components/forms/request/create-order-form';
import { toast } from '@/components/ui/toaster';
import { useAuth } from '@/providers/auth';

export default function CreateOrderPage() {
	const { userId } = useAuth();
	const router = useRouter();

	const handleSuccessCreate = () => {
		toast.success('Order request was created successfully!');

		router.push(`/${userId}/requests`);
	};

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center justify-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>
					Create order request
				</h1>
			</div>
			<div className='flex flex-1 justify-center rounded-lg border border-dashed shadow-sm p-6'>
				<CreateOrderForm onSuccess={handleSuccessCreate} />
			</div>
		</main>
	);
}
