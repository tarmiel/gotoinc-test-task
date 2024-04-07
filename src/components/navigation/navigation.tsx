'use client';

import Link from 'next/link';
import { Boxes, CirclePlus, PackageOpen } from 'lucide-react';
import { useAuth } from '@/providers/auth';

import styles from './styles.module.scss';
import { NavItem } from './nav-item';
import { usePathname } from 'next/navigation';

export function Navigation() {
	const { userId } = useAuth();
	const pathname = usePathname();

	const checkIsActiveLink = (href: string) => pathname === href;

	return (
		<nav className={styles.navigation}>
			<NavItem
				href={`/${userId}/create`}
				isActive={checkIsActiveLink(`/${userId}/create`)}
			>
				<CirclePlus /> Create
			</NavItem>
			<NavItem
				href={`/${userId}/requests`}
				isActive={checkIsActiveLink(`/${userId}/requests`)}
			>
				<PackageOpen /> User&apos;s requests
			</NavItem>
			<NavItem
				href='/requests'
				isActive={checkIsActiveLink(`/requests`)}
			>
				<Boxes /> All requests
			</NavItem>
		</nav>
	);
}
