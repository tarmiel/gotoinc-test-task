'use client';

import { CircleUser } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/auth';

export function AvatarDropdown() {
	const { userId } = useAuth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='secondary'
					size='icon'
					className='rounded-full'
				>
					<CircleUser className='h-5 w-5' />
					<span className='sr-only'>Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel className={'text-center'}>
					My Account
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className={'text-nowrap overflow-hidden overflow-ellipsis'}
				>
					{userId}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
