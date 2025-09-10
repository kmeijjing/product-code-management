export const groupByKey = (array: any[], key: string) => {
	const grouped: Record<string, any[]> = {};
	array.forEach((item) => {
		if (!grouped[item[key]]) {
			grouped[item[key]] = [];
		}
		grouped[item[key]].push(item);
	});
	return grouped;
};
