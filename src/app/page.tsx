'use client';

import { useEffect } from 'react';
import CodePreviewCard from '@/components/CodePreviewCard';
import OptionsCodeCard from '@/components/OptionsCodeCard';
import ProductCodeCard from '@/components/ProductCodeCard';
import { useCodeManagement } from '@/hooks/useCodeManagement';

export default function Home() {
	const { sampleCodePattern, activeCodeDigit, fetchCodePatterns } =
		useCodeManagement();

	useEffect(() => {
		fetchCodePatterns();
	}, []);

	return (
		<div className='mx-auto flex w-[848px] flex-col gap-y-[12px] p-[16px]'>
			<CodePreviewCard
				sampleCode={sampleCodePattern}
				activeCodeDigit={activeCodeDigit}
			/>

			<div className='flex flex-nowrap gap-x-[12px]'>
				<ProductCodeCard />
				<OptionsCodeCard />
			</div>
		</div>
	);
}
