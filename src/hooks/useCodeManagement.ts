import { useMemo } from 'react';
import { CodePattern } from '@/types/codePattern';
import { CODE_PATTERNS } from '@/constants/codePatterns';
import { CODE_DATA } from '@/constants/codes';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { useProductCodeStore } from '@/stores/useProductCodeStore';
import { groupByKey, sortByKey } from '@/utils';

const withSampleCode = (
	code: CodePattern
): CodePattern & { sampleCode: string } => {
	if (code.field === 'sequence') {
		return { ...code, sampleCode: '0'.repeat(code.length) };
	}

	const sampleCode = CODE_DATA[code.field]?.filter(
		(item) => item.codeName.length === code.length
	);
	return {
		...code,
		sampleCode: sampleCode?.[0]?.value || '',
	};
};

export const useCodeManagement = () => {
	const activeProductCode = useProductCodeStore(
		(state) => state.activeProductCode
	);
	const updateProductCode = useProductCodeStore((state) => state.update);

	const activeOptionCode = useOptionCodeStore((state) => state.activeOptionCode);
	const updateOptionCode = useOptionCodeStore((state) => state.update);

	const sampleCodePattern = useMemo(() => {
		return {
			product: activeProductCode.map(withSampleCode),
			option: activeOptionCode.map(withSampleCode),
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
			.map(withSampleCode);

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
