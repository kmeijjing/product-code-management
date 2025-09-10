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
		const productCode = activeProductCode.map((code) => {
			if (code.field === 'sequence') {
				return { ...code, sampleCode: '0'.repeat(code.length) };
			}
			const sampleCode = CODE_DATA[code.field]?.[0]?.value || '';
			return { ...code, sampleCode: sampleCode || '' };
		});

		const optionCode = activeOptionCode.map((code) => {
			if (code.field === 'sequence') {
				return { ...code, sampleCode: '0'.repeat(code.length) };
			}
			const sampleCode = CODE_DATA[code.field]?.[0]?.value || '';
			return { ...code, sampleCode: sampleCode || '' };
		});
		return {
			product: productCode,
			option: optionCode,
		};
	}, [activeProductCode, activeOptionCode]);

	const activeCodeDigit = useMemo(() => {
		const codes = [...activeProductCode, ...activeOptionCode];

		return codes.reduce((acc, code) => acc + code.length, 0);
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
		activeCodeDigit,
	};
};
