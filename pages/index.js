import useSWR from 'swr';
import { ListItem, OrderedList, Link, Flex, Text } from '@chakra-ui/react';

import AppShell from '@/components/AppShell';
import fetcher from '@/utils/fetcher';

export default function Home() {
	const { data } = useSWR('/api/provinces', fetcher);
	return (
		<>
			<AppShell title="จังหวัดทั้งหมด">
				<Flex justify="center" alignItems="center">
					<OrderedList>
						{data?.map((d) => (
							<ListItem key={d.key}>
								<Link href={`/${d.key}`}>
									{d.value} (Updated at: {d.updatedAt})
								</Link>
							</ListItem>
						))}
					</OrderedList>
				</Flex>
			</AppShell>
		</>
	);
}
