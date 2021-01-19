import all from '@/data/all';

export default (req, res) => {
	let result = [];
	for (let key in all) {
		const cases = all[key].cases;
		if (cases && cases.length > 0) {
			result.push({
				key,
				value: all[key].name,
				updatedAt: cases[cases.length - 1].date,
			});
		}
	}

	res.status(200).json(result);
};
