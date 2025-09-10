'use client';

import { useEffect } from 'react';
import CodePreviewCard from '@/components/CodePreviewCard';
import OptionsCodeCard from '@/components/OptionsCodeCard';
import ProductCodeCard from '@/components/ProductCodeCard';
import { useCodeManagement } from '@/hooks/useCodeManagement';

export default function Home() {
	const { fetchCodePatterns } = useCodeManagement();

	useEffect(() => {
		fetchCodePatterns();
	}, []);

	return (
		<div className='flex flex-col gap-y-[16px] p-[16px]'>
			<CodePreviewCard />

			<div className='flex flex-nowrap gap-x-[16px]'>
				<OptionsCodeCard />
				<ProductCodeCard />
			</div>
		</div>
	);
}
