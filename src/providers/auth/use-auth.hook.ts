import { useContext } from 'react';
import { AuthContext } from './auth-provider';

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('Auth provider not found');
	return ctx;
};
