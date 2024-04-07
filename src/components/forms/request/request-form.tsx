import { Loader2 } from 'lucide-react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ValueOf } from '@/lib/types';
import { ParcelType, RequestType } from '@/modules/requests';

import { requestFormSchema } from './lib/schemas';
import { RequestFormData } from './lib/types';

type RequestFormProps = {
	requestType: ValueOf<typeof RequestType>;
	onSubmit: (data: RequestFormData) => void;
	defaultValues?: Partial<RequestFormData>;
	actionText?: string;
};

export function RequestForm({
	requestType,
	onSubmit,
	defaultValues = {},
	actionText,
}: RequestFormProps) {
	const form = useForm<RequestFormData>({
		mode: 'onBlur',
		resolver: zodResolver(requestFormSchema),
		defaultValues: {
			requestType,
			from: '',
			to: '',
			parcelDescription: '',
			...defaultValues,
		},
	});

	const isOrderRequest = requestType === RequestType.ORDER;

	const handleSubmit = useCallback(
		(data: RequestFormData) => {
			onSubmit(data);
		},
		[onSubmit]
	);

	return (
		<div className={'min-w-80'}>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className='flex gap-6 items-center flex-col justify-between'
					autoComplete='off'
				>
					<FormField
						control={form.control}
						name='from'
						render={({ field }) => (
							<FormItem>
								<FormLabel>City from</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='from city'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='to'
						render={({ field }) => (
							<FormItem>
								<FormLabel>City to</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='to city'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='dispatchDate'
						render={() => (
							<FormItem>
								<FormLabel>Date of dispatch</FormLabel>
								<FormControl>
									<DatePicker
										control={form.control}
										name='dispatchDate'
										disabled={date => date < new Date()}
										initialFocus
									/>
								</FormControl>
								<FormDescription>
									You can choose dates from tomorrow onward.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{isOrderRequest && (
						<>
							<FormField
								control={form.control}
								name='parcelType'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Parcel type</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select a parcel type' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{Object.values(ParcelType).map(type => (
													<SelectItem
														value={type}
														key={type}
													>
														{type}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='parcelDescription'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Parcel description</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Describe the parcel'
												className='resize-none'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}

					<Button
						size='sm'
						type='submit'
						disabled={form.formState.isSubmitting}
						className='flex gap-1'
					>
						{form.formState.isSubmitting ? (
							<Loader2 className='h-4 w-4 animate-spin' />
						) : (
							<>{actionText ?? 'Submit'}</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}
