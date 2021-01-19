import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Select } from '@chakra-ui/react';

import fetcher from '@/utils/fetcher';

const ProvinceSelector = () => {
	const router = useRouter();
	const { data } = useSWR(`/api/provinces`, fetcher);

	const onSelectProvnce = (e) => {
		// console.log(province.target.value);
		const province = e.target.value;
		router.push(`/${province}`);
	};

	if (!data) {
		return null;
	}

	const { province } = router.query;

	return (
		<Select
			placeholder="เลือกจังหวัด"
			onChange={onSelectProvnce}
			value={province}
		>
			{data.map((d) => (
				<option value={d.key} key={d.key}>
					{d.value}
				</option>
			))}
		</Select>
	);
};

export default ProvinceSelector;
