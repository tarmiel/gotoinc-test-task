import { useEffect, useState } from 'react';

export const useHydrated = () => {
	const [isHydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);

	return { isHydrated };
};
