import { AuthProvider } from '@/providers/auth';
import { ModalProvider } from '@/providers/modal';
import { StoreProvider } from '@/providers/store';
import { ThemeProvider } from '@/providers/theme';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<StoreProvider>
			<ThemeProvider>
				<AuthProvider>
					<ModalProvider>{children}</ModalProvider>
				</AuthProvider>
			</ThemeProvider>
		</StoreProvider>
	);
}
