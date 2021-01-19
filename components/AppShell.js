import React from 'react';
import Head from 'next/head';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';

import ProvinceSelector from '@/components/ProvinceSelector';
import GithubIcon from '@/components/GitHubIcon';

const AppShell = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title} Thai Covid-19</title>
			</Head>
			<Flex justifyContent="space-between" backgroundColor="white">
				<Flex
					justifyContent="flex-start"
					alignItems="flex-start"
					direction="column"
					p={8}
				>
					<Heading size="md" as="h2" mb={5} color="gray.400">
						<Link href="/">THAI COVID-19</Link>
					</Heading>

					<Heading size="xl" as="h2">
						{title}
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
				<Text fontSize="xs" color="gray.400" align="center">
					<GithubIcon w={6} h={6} marginRight={2} />
					<Link href="https://github.com/gie3d/thai-covid-19" target="_blank">
						github.com/gie3d/thai-covid-19
					</Link>
				</Text>
			</Flex>
		</>
	);
};

export default AppShell;
