import { CODE_PATTERNS } from '@/constants/codePatterns';
import {
	CATEGORY_MOCK_UP_DATA,
	YEAR_MOCK_UP_DATA,
	SEASON_MOCK_UP_DATA,
	BRAND_MOCK_UP_DATA,
	SIZE_MOCK_UP_DATA,
	COLOR_MOCK_UP_DATA,
	CODE_DATA,
} from '@/constants/codes';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { useProductCodeStore } from '@/stores/useProductCodeStore';
import { useSampleCodeStore } from '@/stores/useSampleCodeStore';
import { Code } from '@/types/code';
import { groupByKey, sortByKey } from '@/utils';

export const useCodeManagement = () => {
	const { updateCode } = useSampleCodeStore();
	const { productCode } = useProductCodeStore();
	const { optionCode } = useOptionCodeStore();

	const fetchCodePatterns = () => {
		const patterns = CODE_PATTERNS;

		const activePatterns = patterns
			.filter((pattern) => pattern.sort !== -1)
			.map((pattern) => {
				if (pattern.field === 'sequence') {
					return { ...pattern, sampleCode: '0'.repeat(pattern.length) };
				}

				const sampleCode = CODE_DATA[pattern.field]?.[0]?.value || '';
				return { ...pattern, sampleCode: sampleCode };
			});

		const grouped = groupByKey(activePatterns, 'fieldGroup');

		const sorted = Object.entries(grouped).reduce(
			(acc, [key, value]) => {
				acc[key] = sortByKey(value, 'sort');
				return acc;
			},
			{} as Record<string, typeof activePatterns>
		);

		updateCode('sampleCode', {
			product: sorted['product'] || [],
			option: sorted['option'] || [],
		});
	};

	const fetchCodeControlList = () => {};

	return {
		fetchCodePatterns,
		fetchCodeControlList,
	};
};
