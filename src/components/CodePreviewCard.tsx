import SectionHeaderCard from '@/components/SectionHeaderCard';
import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import { useSampleCodeStore } from '@/stores/useSampleCodeStore';
import { useShallow } from 'zustand/shallow';

const CodePreview = () => {
	const { sampleCode } = useSampleCodeStore(
		useShallow((state) => ({
			sampleCode: state.sampleCode,
		}))
	);

	return (
		<SectionHeaderCard
			title='코드 미리보기'
			subTitle='미리보기는 등록된 코드의 최상단 값으로 노출됩니다.'
		>
			<SectionHeaderCard.Body>
				<div className='flex items-center justify-center px-[24px] py-[16px]'>
					<div className='flex w-fit flex-nowrap items-center gap-x-[8px]'>
						{Object.entries(sampleCode).map(([key, codes]) => (
							<div
								key={key}
								className='flex	w-full flex-col items-center'
							>
								<h3 className='mb-[6px] text-[12px] font-bold	text-gray-600'>
									{key === 'product' ? '상품 코드' : '옵션 코드'}
								</h3>

								<div className='h-[2px] w-full bg-gray-400'></div>

								<div className='flex	flex-nowrap gap-[8px]'>
									{codes.map((code) => (
										<div
											key={code.field}
											className='mb-[4px] flex flex-col gap-x-[8px] py-[4px]'
										>
											<b className='gap-x-[4px] border-b border-gray-300 text-center text-[24px] tracking-[4px]'>
												{code.sampleCode}
											</b>
											<span className='inline-block text-center text-[12px] text-nowrap text-gray-500'>
												{CODE_FIELD_LABELS[code.field]}
											</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</SectionHeaderCard.Body>
		</SectionHeaderCard>
	);
};

export default CodePreview;
