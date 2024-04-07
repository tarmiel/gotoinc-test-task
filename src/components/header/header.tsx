import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Navigation } from '@/components/navigation';
import { AvatarDropdown } from './avatar-dropdown';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='shrink-0 md:hidden'
					>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side='left'
					className={styles.sheetContent}
				>
					<Link
						href='#'
						className={styles.sheetLogo}
					>
						<Package2 className='h-6 w-6' />
						<span className='sr-only'>Acme Inc</span>
					</Link>
					<Navigation />
				</SheetContent>
			</Sheet>
			<div className={'w-full flex-1'} />
			<ThemeToggle />
			<AvatarDropdown />
		</header>
	);
}
