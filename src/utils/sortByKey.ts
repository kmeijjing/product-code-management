export const sortByKey = (
	arr: any[],
	key: string,
	type: 'ASC' | 'DESC' = 'ASC',
	isNumeric: boolean = true
) => {
	// DESC: (dcba, 4321)
	// ASC: (abcd, 1234)
	if (!Array.isArray(arr) || !key) return arr;

	if (type === 'ASC') {
		return arr.sort((a, b) =>
			String(a[key]).localeCompare(String(b[key]), undefined, {
				numeric: isNumeric,
			})
		);
	}
	return arr.sort((a, b) =>
		String(b[key]).localeCompare(String(a[key]), undefined, {
			numeric: isNumeric,
		})
	);
};
