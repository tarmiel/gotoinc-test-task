'use client';

import { useState } from 'react';

export const ModalService = () => {
	const [content, setContent] = useState<React.ReactNode>(null);
	const [isOpen, setIsOpen] = useState(false);

	const show = (content: React.ReactNode) => {
		setIsOpen(true);
		setContent(content);
	};
	const close = () => setIsOpen(false);
	const toggle = () => setIsOpen(open => !open);

	return {
		show,
		close,
		toggle,
		content,
		isOpen,
	};
};
