'use client';

import { useMemo } from 'react';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { useAppSelector } from '@/lib/hooks';
import { RequestsTable } from '@/components/tables/requests-table';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/providers/auth';

export default function UserRequestsPage() {
	const { requests } = useAppSelector(state => state.requests);
	const { userId } = useAuth();

	const userRequests = useMemo(() => {
		return [...requests]
			.filter(request => request.userId === userId)
			.sort((a, b) => a.createdAt - b.createdAt);
	}, [requests, userId]);

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 overflow-x-auto'>
			<div className='flex items-center'>
				<div className='ml-auto flex items-center gap-2'>
					<Button asChild>
						<Link
							className={'mt-2 sm:mt-0 h-8 gap-1'}
							href={`/${userId}/create`}
						>
							<PlusCircle className='h-3.5 w-3.5' />
							<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
								Create request
							</span>
						</Link>
					</Button>
				</div>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>User&apos;s requests</CardTitle>
					<CardDescription>
						Manage your requests and view other users&apos; matched requests.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<RequestsTable
						requests={userRequests}
						isEditable
					/>
				</CardContent>
			</Card>
		</main>
	);
}
