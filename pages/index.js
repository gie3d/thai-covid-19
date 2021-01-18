import Head from 'next/head';

import AppShell from '@/components/AppShell';
import CaseChart from '@/components/CaseChart';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Thai Covid 19</title>
			</Head>
			<AppShell>
				<CaseChart province="bangkok" />
			</AppShell>
		</div>
	);
}
