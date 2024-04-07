'use client';

import { createContext, useContext, useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { ModalService } from './modal-service';

export const ModalContext = createContext<ReturnType<
	typeof ModalService
> | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const srv = ModalService();

	return (
		<ModalContext.Provider value={srv}>
			<Dialog
				open={srv.isOpen}
				onOpenChange={srv.toggle}
			>
				{srv.content}
			</Dialog>
			{children}
		</ModalContext.Provider>
	);
}
