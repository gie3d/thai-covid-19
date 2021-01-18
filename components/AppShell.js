import React from 'react';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';

import ProvinceSelector from '@/components/ProvinceSelector';

const AppShell = ({ children }) => {
	return (
		<>
			<Flex justifyContent="space-between" backgroundColor="white">
				<Flex
					justifyContent="flex-start"
					alignItems="flex-start"
					direction="column"
					p={8}
				>
					<Heading size="m" as="h1" mb={-2}>
						THAI COVID-19
					</Heading>
					<Heading size="xl" as="h1" mb={2}>
						กรุงเทพมหานคร
					</Heading>
				</Flex>
				<Flex
					justifyContent="center"
					alignItems="center"
					direction="column"
					p={8}
				>
					<ProvinceSelector />
				</Flex>
			</Flex>
			<Flex px={8}>{children}</Flex>
			<Flex justify="center" align="center">
				<Text fontSize="xs" color="gray.400">
					Project Open Sourced at:{' '}
					<Link href="https://github.com/gie3d/thai-covid-19">
						https://github.com/gie3d/thai-covid-19
					</Link>
				</Text>
			</Flex>
		</>
	);
};

export default AppShell;
