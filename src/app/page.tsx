import { Package2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-1 flex-col items-center justify-between p-8'>
			<div className='flex flex-1 flex-col items-center justify-center gap-3'>
				<div className='flex place-items-center gap-4'>
					<Package2 className='h-12 w-12' />
					<span className='font-semibold text-2xl'>GotoInc Test App</span>
				</div>
				<p className={'max-w-80 text-center text-muted-foreground'}>
					Application that allows users to create a request for the
					transportation of your parcel or deliver another user's package.
				</p>
			</div>

			<div className='flex justify-center md:justify-end w-full'>
				<a
					className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
					href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src='/next.svg'
						alt='Nextjs Logo'
						className='dark:invert'
						width={100}
						height={24}
						priority
					/>
				</a>
			</div>
		</main>
	);
}
