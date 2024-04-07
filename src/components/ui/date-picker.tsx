'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import {
	Control,
	FieldPath,
	FieldValues,
	useController,
} from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar, CalendarProps } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { FormControl } from './form';

type Properties<T extends FieldValues> = {
	control: Control<T, null>;
	name: FieldPath<T>;
} & CalendarProps;

export function DatePicker<T extends FieldValues>({
	control,
	name,
	...calendarProps
}: Properties<T>) {
	const { field } = useController({ control, name });

	return (
		<Popover modal>
			<PopoverTrigger asChild>
				<FormControl>
					<Button
						variant={'outline'}
						className={cn(
							'w-full pl-3 text-left font-normal',
							!field.value && 'text-muted-foreground'
						)}
					>
						{field.value ? (
							format(field.value, 'PPP')
						) : (
							<span>Pick a date</span>
						)}
						<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
					</Button>
				</FormControl>
			</PopoverTrigger>
			<PopoverContent
				className='w-auto p-0'
				align='start'
			>
				<Calendar
					{...calendarProps}
					selected={field.value}
					onSelect={field.onChange}
					mode='single'
				/>
			</PopoverContent>
		</Popover>
	);
}
