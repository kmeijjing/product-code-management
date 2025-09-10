import CodePreviewCard from '@/components/CodePreviewCard';
import OptionsCodeCard from '@/components/OptionsCodeCard';
import ProductCodeCard from '@/components/ProductCodeCard';

export default function Home() {
	return (
		<div className='flex flex-col gap-y-[16px] p-[16px]'>
			<CodePreviewCard />

			<div className='flex flex-nowrap	gap-x-[16px]'>
				<OptionsCodeCard />
				<ProductCodeCard />
			</div>
		</div>
	);
}
