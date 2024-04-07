import { EditRequestForm } from '@/components/forms/request';
import { DialogContent } from '@/components/ui/dialog';
import { Request } from '@/modules/requests';
import { toast } from '@/components/ui/toaster';

type EditModalProps = {
	request: Request;
	onClose?: () => void;
};

export function EditModal({ request, onClose }: EditModalProps) {
	const handleSuccessEdit = () => {
		toast.success('Request was edited successfully!');

		onClose?.();
	};

	return (
		<DialogContent>
			<EditRequestForm
				request={request}
				onSuccess={handleSuccessEdit}
			/>
		</DialogContent>
	);
}
