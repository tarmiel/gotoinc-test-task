import Link from 'next/link';
import { cn } from '@/lib/utils';

import styles from './styles.module.scss';

export type NavItemProps = {
	children: React.ReactNode;
	href: string;
	isActive: boolean;
	className?: string;
};

export function NavItem({ href, children, isActive, className }: NavItemProps) {
	return (
		<Link
			href={href}
			className={cn(styles.navItem, className, {
				[styles.isActive]: isActive,
			})}
		>
			{children}
		</Link>
	);
}
