import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header/header';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

import { Providers } from './providers';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gotoinc test App',
	description: 'Gotoinc test application for parcels delivery',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={cn(
					'min-h-screen bg-background antialiased',
					inter.className
				)}
				suppressHydrationWarning
			>
				<Providers>
					<Toaster />
					<div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
						<Sidebar />
						<div className='flex flex-col overflow-x-hidden'>
							<Header />
							{children}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
