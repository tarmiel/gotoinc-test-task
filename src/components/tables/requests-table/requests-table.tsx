import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Request } from '@/modules/requests';
import { useHydrated } from '@/lib/hooks';

import { ActionsMenu } from './lib/components';

type RequestsTableProps = {
	requests: Request[];
	isEditable?: boolean;
};

export function RequestsTable({ requests, isEditable }: RequestsTableProps) {
	const { isHydrated } = useHydrated();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Type</TableHead>
					<TableHead>City from</TableHead>
					<TableHead>City to</TableHead>
					<TableHead>Date of dispatch</TableHead>
					<TableHead>Parcel type</TableHead>
					<TableHead>Parcel description</TableHead>
					<TableHead>Created at</TableHead>
					{isEditable && (
						<TableHead>
							<span className='sr-only'>Actions</span>
						</TableHead>
					)}
				</TableRow>
			</TableHeader>
			<TableBody>
				{isHydrated &&
					requests.map(request => (
						<TableRow key={request.id}>
							<TableCell>
								<Badge variant='outline'>{request.requestType}</Badge>
							</TableCell>
							<TableCell>{request.from}</TableCell>
							<TableCell>{request.to}</TableCell>
							<TableCell>
								{format(request.dispatchDate, 'MM/dd/yyyy')}
							</TableCell>
							<TableCell>
								{request.requestType === 'order' ? request.parcelType : '—'}
							</TableCell>
							<TableCell>
								{request.requestType === 'order'
									? request.parcelDescription
									: '—'}
							</TableCell>
							<TableCell>{format(request.createdAt, 'MM/dd/yyyy')}</TableCell>
							{isEditable && (
								<TableCell>
									<ActionsMenu request={request} />
								</TableCell>
							)}
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
}
