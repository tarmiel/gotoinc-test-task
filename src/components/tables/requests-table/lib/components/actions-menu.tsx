import { useCallback } from 'react';
import { Blocks, Edit, MoreHorizontal, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/toaster';
import { useAppDispatch } from '@/lib/hooks';
import { Request, requestActions } from '@/modules/requests';
import { useModal } from '@/providers/modal';

import { DeleteModal } from './delete-modal';
import { EditModal } from './edit-modal';
import { MatchModal } from './match-modal';

type ActionsMenuProps = {
	request: Request;
};

export function ActionsMenu({ request }: ActionsMenuProps) {
	const dispatch = useAppDispatch();
	const modal = useModal();

	const handleDeleteRequest = useCallback(() => {
		dispatch(requestActions.deleteRequest(request.id));
		toast.success(`Request ${request.id} was deleted successfully!`);
		modal.close();
	}, [request.id, dispatch, modal]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					aria-haspopup='true'
					size='icon'
					variant='ghost'
				>
					<MoreHorizontal className='h-4 w-4' />
					<span className='sr-only'>Toggle menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className={'flex items-center gap-2'}
					onClick={() => modal.show(<MatchModal request={request} />)}
				>
					<Blocks className='h-3 w-3' />
					Show matched
				</DropdownMenuItem>
				<DropdownMenuSeparator />

				<DropdownMenuItem
					className={'flex items-center gap-2'}
					onClick={() =>
						modal.show(
							<EditModal
								request={request}
								onClose={modal.close}
							/>
						)
					}
				>
					<Edit className='h-3 w-3' />
					Edit
				</DropdownMenuItem>

				<DropdownMenuItem
					className={'flex items-center gap-2 text-destructive'}
					onClick={() =>
						modal.show(
							<DeleteModal
								onCancel={modal.close}
								onConfirm={handleDeleteRequest}
							/>
						)
					}
				>
					<Trash2 className='h-3 w-3' />
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
