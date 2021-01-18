import useSWR from 'swr';
import {
	VictoryChart,
	VictoryTheme,
	VictoryLine,
	VictoryScatter,
	VictoryLabel,
} from 'victory';
import { Flex } from '@chakra-ui/react';
import fetcher from '@/utils/fetcher';

const CaseChart = ({ province }) => {
	const { data } = useSWR(`/api/cases/${province}`, fetcher);

	console.log('data: ', data);
	if (!data) {
		return (
			<Flex
				flex={1}
				maxW="100vw"
				maxH="80vh"
				justifyContent="center"
				alignItems="center"
			>
				Loading...
			</Flex>
		);
	}
	const chartData = parseChartDats(data);

	return (
		<Flex
			flex={1}
			maxW="100vw"
			maxH="80vh"
			justifyContent="center"
			alignItems="center"
		>
			<VictoryChart
				width={800}
				theme={VictoryTheme.material}
				minDomain={{ y: 0 }}
			>
				<VictoryLine
					style={{
						data: { stroke: '#c43a31' },
						parent: { border: '2px solid #ccc' },
					}}
					data={chartData}
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
				/>
				<VictoryScatter
					size={4}
					style={{ data: { fill: 'tomato' } }}
					data={chartData}
					labels={({ datum }) => datum.y}
					labelComponent={<VictoryLabel renderInPortal dy={-20} />}
				/>
			</VictoryChart>
		</Flex>
	);
};

const parseChartDats = (data) => {
	return data.map((d) => {
		return {
			x: d.date,
			y: d.case,
		};
	});
};

export default CaseChart;
