import useSWR from 'swr';
import {
	VictoryChart,
	VictoryTheme,
	VictoryLine,
	VictoryScatter,
	VictoryLabel,
} from 'victory';
import { Flex } from '@chakra-ui/react';

const CaseChart = ({ cases }) => {
	const chartData = parseChartData(cases);
	return (
		<Flex
			flex={1}
			maxW="100vw"
			maxH="80vh"
			justifyContent="center"
			alignItems="flex-start"
			direction="column"
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

const parseChartData = (cases) => {
	return cases.map((d) => {
		return {
			x: d.date,
			y: d.case,
		};
	});
};

export default CaseChart;
