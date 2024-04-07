'use client';

import { redirect, useParams } from 'next/navigation';

export default function UserPage() {
	const { userId } = useParams();

	return redirect(`${userId}/requests`);
}
