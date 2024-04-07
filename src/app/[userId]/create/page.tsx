'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/auth';

import Link from 'next/link';

export default function CreateRequestPage() {
	const { userId } = useAuth();

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Create Request</h1>
			</div>
			<div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
				<div className='flex flex-col items-center gap-1 text-center'>
					<h3 className='text-2xl font-bold tracking-tight'>
						Select request type
					</h3>
					<p className='text-sm text-muted-foreground max-w-80'>
						You can create an order request for the transportation of your
						parcel or deliver another user&apos;s package.
					</p>
					<div className={'p-4 flex gap-2'}>
						<Button
							asChild
							variant={'outline'}
						>
							<Link href={`/${userId}/create/order`}>Order</Link>
						</Button>
						<Button
							asChild
							variant={'outline'}
						>
							<Link href={`/${userId}/create/deliver`}>Delivery</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
