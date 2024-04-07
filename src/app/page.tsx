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
					transportation of your parcel or deliver another user&apos;s package.
				</p>
			</div>
		</main>
	);
}
