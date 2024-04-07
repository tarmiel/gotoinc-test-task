'use client';

import { createContext } from 'react';
import { AuthService } from './auth-service';

export const AuthContext = createContext<ReturnType<typeof AuthService> | null>(
	null
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const srv = AuthService();

	return <AuthContext.Provider value={srv}>{children}</AuthContext.Provider>;
}
