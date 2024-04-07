import { useContext } from 'react';
import { ModalContext } from './modal-provider';

export const useModal = () => {
	const ctx = useContext(ModalContext);
	if (!ctx) throw new Error('Modal provider not found');
	return ctx;
};
