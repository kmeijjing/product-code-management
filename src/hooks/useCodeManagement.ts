import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';
import { CODE_PATTERNS } from '@/constants/codePatterns';
import { CODE_DATA } from '@/constants/codes';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { useProductCodeStore } from '@/stores/useProductCodeStore';
import { groupByKey, sortByKey } from '@/utils';

export const useCodeManagement = () => {
	const { activeProductCode, update: updateProductCode } = useProductCodeStore(
		useShallow((state) => ({
			activeProductCode: state.activeProductCode,
			update: state.update,
		}))
	);
	const { activeOptionCode, update: updateOptionCode } = useOptionCodeStore(
		useShallow((state) => ({
			activeOptionCode: state.activeOptionCode,
			update: state.update,
		}))
	);

	const sampleCodePattern = useMemo(() => {
		return {
			product: activeProductCode,
			option: activeOptionCode,
		};
	}, [activeProductCode, activeOptionCode]);

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

		const inactiveProductCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'product' && pattern.sort === -1
		);

		const inactiveOptionCode = codePattern.filter(
			(pattern) => pattern.fieldGroup === 'option' && pattern.sort === -1
		);

		updateProductCode('activeProductCode', sorted['product']);
		updateProductCode('inactiveProductCode', inactiveProductCode);
		updateOptionCode('activeOptionCode', sorted['option']);
		updateOptionCode('inactiveOptionCode', inactiveOptionCode);
	};

	return {
		fetchCodePatterns,
		sampleCodePattern,
	};
};
