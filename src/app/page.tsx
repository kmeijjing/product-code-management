'use client';

import { useEffect } from 'react';
import CodePreviewCard from '@/components/CodePreviewCard';
import OptionsCodeCard from '@/components/OptionsCodeCard';
import ProductCodeCard from '@/components/ProductCodeCard';
import { useCodeManagement } from '@/hooks/useCodeManagement';

export default function Home() {
	const {
		sampleCodePattern,
		activeCodeDigit,
		exceedingMaxLength,
		fetchCodePatterns,
	} = useCodeManagement();

	useEffect(() => {
		fetchCodePatterns();
	}, []);

	return (
		<div className='mx-auto flex w-[848px] flex-col gap-y-[12px] p-[20px]'>
			<section className='flex flex-nowrap	items-center justify-between'>
				<h1 className='text-center text-xl font-bold'>Product Code Management</h1>

				<button className='min-w-[62px] cursor-pointer rounded-[6px] bg-blue-500 px-[12px] py-[4px] text-[14px] font-medium text-white hover:bg-blue-700'>
					저장
				</button>
			</section>
			<CodePreviewCard
				sampleCode={sampleCodePattern}
				activeCodeDigit={activeCodeDigit}
				exceedingMaxLength={exceedingMaxLength}
			/>

			<div className='flex flex-nowrap gap-x-[12px]'>
				<ProductCodeCard />
				<OptionsCodeCard />
			</div>
		</div>
	);
}
