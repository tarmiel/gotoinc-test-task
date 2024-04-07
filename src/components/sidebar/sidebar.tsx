import { Package2 } from 'lucide-react';
import Link from 'next/link';

import { Navigation } from '@/components/navigation';
import styles from './styles.module.scss';

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<Link
						href='/'
						className={styles.logo}
					>
						<Package2 className='h-6 w-6' />
						<span>GotoInc Test App</span>
					</Link>
				</div>
				<div className='flex-1'>
					<Navigation />
				</div>
			</div>
		</div>
	);
}
