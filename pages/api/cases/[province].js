import all from '@/data/all';

export default (req, res) => {
	const { query } = req;
	const { province } = query;
	const result = all[province] ? all[province] : [];
	res.status(200).json(result);
};
