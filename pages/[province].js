import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Flex } from '@chakra-ui/react';

import AppShell from '@/components/AppShell';
import CaseChart from '@/components/CaseChart';
import fetcher from '@/utils/fetcher';

export default function Province() {
	const router = useRouter();
	const { province } = router.query;
	const { data } = useSWR(`/api/cases/${province}`, fetcher);

	if (!data) {
		return (
			<>
				>
				<AppShell>
					<Flex
						flex={1}
						maxW="100vw"
						maxH="80vh"
						justifyContent="center"
						alignItems="center"
					>
						Loading...
					</Flex>
				</AppShell>
			</>
		);
	}

	return (
		<>
			<AppShell title={data.name}>
				<CaseChart cases={data.cases} />
			</AppShell>
		</>
	);
}
