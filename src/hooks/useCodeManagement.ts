import { CODE_PATTERNS } from '@/constants/codePatterns';
import { CODE_DATA } from '@/constants/codes';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { useProductCodeStore } from '@/stores/useProductCodeStore';
import { useSampleCodeStore } from '@/stores/useSampleCodeStore';
import { groupByKey, sortByKey } from '@/utils';

export const useCodeManagement = () => {
	const { updateCode } = useSampleCodeStore();
	const { update: updateProductCode } = useProductCodeStore();
	const { update: updateOptionCode } = useOptionCodeStore();

	const fetchCodePatterns = () => {
		const codePattern = CODE_PATTERNS;

		const activePatterns = codePattern
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

		const activeProductCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'product' && pattern.sort !== -1
		);
		const inactiveProductCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'product' && pattern.sort === -1
		);
		const activeOptionCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'option' && pattern.sort !== -1
		);
		const inactiveOptionCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'option' && pattern.sort === -1
		);

		updateProductCode('activeProductCode', activeProductCode);
		updateProductCode('inactiveProductCode', inactiveProductCode);
		updateOptionCode('activeOptionCode', activeOptionCode);
		updateOptionCode('inactiveOptionCode', inactiveOptionCode);
	};

	return {
		fetchCodePatterns,
	};
};
