'use client';

import { useMemo, useState } from 'react';
import { ListFilter } from 'lucide-react';

import {
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';

import { RequestsTable } from '@/components/tables/requests-table';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppSelector } from '@/lib/hooks';
import { type ValueOf } from '@/lib/types';

const SortOrder = {
	ASC: 'asc',
	DESC: 'desc',
} as const;

const SortBy = {
	CREATED_AT: 'createdAt',
	DISPATCH_DATE: 'dispatchDate',
} as const;

export default function AllRequestsPage() {
	const [sortOrder, setSortOrder] = useState<ValueOf<typeof SortOrder>>(
		SortOrder.ASC
	);
	const [sortBy, setSortBy] = useState<ValueOf<typeof SortBy>>(
		SortBy.CREATED_AT
	);
	const { requests } = useAppSelector(state => state.requests);

	const filteredRequests = useMemo(() => {
		return [...requests].sort((a, b) => {
			if (sortBy === SortBy.CREATED_AT) {
				return sortOrder === SortOrder.DESC
					? b.createdAt - a.createdAt
					: a.createdAt - b.createdAt;
			}

			return sortOrder === SortOrder.DESC
				? b.dispatchDate - a.dispatchDate
				: a.dispatchDate - b.dispatchDate;
		});
	}, [requests, sortOrder, sortBy]);

	return (
		<main className='flex flex-1 flex-col gap-4 p-4 overflow-x-auto'>
			<div className='flex items-center'>
				<div className='ml-auto flex items-center gap-2'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='outline'
								size='sm'
								className='h-8 gap-1'
							>
								<ListFilter className='h-3.5 w-3.5' />
								<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
									Sort
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>Sort by</DropdownMenuLabel>
							<DropdownMenuRadioGroup
								value={sortBy}
								onValueChange={value =>
									setSortBy(value as ValueOf<typeof SortBy>)
								}
							>
								<DropdownMenuRadioItem value={SortBy.CREATED_AT}>
									Date of creation
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value={SortBy.DISPATCH_DATE}>
									Date of dispatch
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={sortOrder}
								onValueChange={value =>
									setSortOrder(value as ValueOf<typeof SortOrder>)
								}
							>
								<DropdownMenuRadioItem
									value={SortOrder.ASC}
									icon={'check'}
								>
									Ascending
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem
									value={SortOrder.DESC}
									icon={'check'}
								>
									Descending
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>All requests</CardTitle>
					<CardDescription>
						The list of all requests of all users.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<RequestsTable
						requests={filteredRequests}
						isEditable={false}
					/>
				</CardContent>
			</Card>
		</main>
	);
}
