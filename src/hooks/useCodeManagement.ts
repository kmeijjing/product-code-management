import { CODE_PATTERNS } from '@/constants/codePatterns';
import { useSampleCodeStore } from '@/stores/useSampleCodeStore';
import { groupByKey, sortByKey } from '@/utils';

export const useCodeManagement = () => {
	const { updateCode } = useSampleCodeStore();

	const fetchCodePatterns = () => {
		const grouped = groupByKey(CODE_PATTERNS, 'fieldGroup');

		const sorted = Object.entries(grouped).reduce(
			(acc, [key, value]) => {
				acc[key] = sortByKey(value, 'sort');
				return acc;
			},
			{} as Record<string, typeof CODE_PATTERNS>
		);

		updateCode('sampleCode', {
			product: sorted['product'] || [],
			option: sorted['option'] || [],
		});
	};

	return {
		fetchCodePatterns,
	};
};
