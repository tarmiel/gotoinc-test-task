import { useMemo } from 'react';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Request } from '@/modules/requests';
import { useAppSelector } from '@/lib/hooks';
import { RequestsTable } from '../../requests-table';

type MatchModalProps = {
	request: Request;
};

export function MatchModal({ request }: MatchModalProps) {
	const { requests } = useAppSelector(state => state.requests);

	const machedRequests = useMemo(() => {
		return requests
			.filter(req => {
				if (
					req.userId !== request.id &&
					req.requestType !== request.requestType &&
					req.from === request.from &&
					req.to === request.to &&
					req.dispatchDate === request.dispatchDate
				) {
					return true;
				}
				return false;
			})
			.sort((a, b) => a.createdAt - b.createdAt);
	}, [requests, request]);

	return (
		<DialogContent className={'min-w-fit py-8'}>
			{machedRequests.length === 0 ? (
				<>
					<DialogTitle className={'py-9'}>
						Seems like there are no matched requests :(
					</DialogTitle>
				</>
			) : (
				<RequestsTable
					requests={machedRequests}
					isEditable={false}
				/>
			)}
		</DialogContent>
	);
}
