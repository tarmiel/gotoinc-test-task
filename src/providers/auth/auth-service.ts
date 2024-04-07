'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StorageKey, storage } from '@/lib/storage';

export const AuthService = () => {
	const [currentUserId, setCurrentUserId] = useState<string | null>(null);
	const { userId } = useParams<{ userId: string }>();

	useEffect(() => {
		if (Boolean(userId)) {
			return setCurrentUserId(userId);
		}

		if (currentUserId) {
			return;
		}

		const storedUserId = storage.get(StorageKey.USER_ID);

		if (storedUserId) {
			return setCurrentUserId(storedUserId);
		}

		const generatedId = uuidv4();
		storage.set(StorageKey.USER_ID, generatedId);
		setCurrentUserId(generatedId);
	}, [userId, currentUserId]);

	return {
		userId: currentUserId,
	};
};
