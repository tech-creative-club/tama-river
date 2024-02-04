'use client';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

export default function Home() {
	const { data: session, status } = useSession();
	return (
		<div>
			{status === 'authenticated' ? (
				<div>
					<p>セッションの期限：{session.expires}</p>
					<p>ようこそ、{session.user?.email}さん</p>
					<div>
						<Logout />
					</div>
				</div>
			) : (
				<Login />
			)}
		</div>
	);
}
