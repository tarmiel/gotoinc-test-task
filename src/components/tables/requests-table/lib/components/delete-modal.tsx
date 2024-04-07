import { Button } from '@/components/ui/button';
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

type DeleteModalProps = {
	onCancel?: () => void;
	onConfirm?: () => void;
};

export function DeleteModal({ onCancel, onConfirm }: DeleteModalProps) {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Are you absolutely sure?</DialogTitle>
				<DialogDescription>
					This action cannot be undone. This will permanently delete your
					request.
				</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<Button
					variant={'outline'}
					onClick={onCancel}
				>
					Cancel
				</Button>
				<Button
					variant={'default'}
					onClick={onConfirm}
				>
					Delete
				</Button>
			</DialogFooter>
		</DialogContent>
	);
}
