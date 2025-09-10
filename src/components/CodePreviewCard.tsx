import clsx from 'clsx';
import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import type { CodePattern } from '@/types/codePattern';
import SectionHeaderCard from '@/components/SectionHeaderCard';
import { MAX_CODE_LENGTH } from '@/constants/codeManagement';

const CodePreview = ({
	sampleCode,
	activeCodeDigit,
}: {
	sampleCode: { product: CodePattern[]; option: CodePattern[] };
	activeCodeDigit: number;
}) => {
	return (
		<SectionHeaderCard
			title='코드 미리보기'
			subTitle='미리보기는 등록된 코드의 최상단 값으로 노출됩니다.'
		>
			<SectionHeaderCard.HeaderRight className='text-[12px] text-gray-500'>
				<span>{activeCodeDigit}자리</span>
				<span> / </span>
				<strong>{MAX_CODE_LENGTH} 자리</strong>
			</SectionHeaderCard.HeaderRight>
			<SectionHeaderCard.Body>
				<div className='flex items-center justify-center px-[24px] py-[16px]'>
					<div className='flex w-fit flex-nowrap items-center gap-x-[8px]'>
						{Object.entries(sampleCode).map(([key, codes]) => (
							<div
								key={key}
								className='flex	w-full flex-col items-center gap-y-[4px]'
							>
								<h3 className='text-[12px] font-bold	text-gray-600'>
									{key === 'product' ? '상품 코드' : '옵션 코드'}
								</h3>

								<div className='h-[2px] w-full bg-gray-400'></div>

								<div className='flex	flex-nowrap gap-[8px]'>
									{codes.map((code) => (
										<div
											key={code.field}
											className='mb-[4px] flex flex-col gap-x-[8px]'
										>
											<b
												className={clsx(
													'h-[38px] min-w-[50px] gap-x-[4px] border-b border-gray-300 text-center text-[24px] leading-[38px] tracking-[4px]',
													{
														'font-normal text-gray-400': !code.sampleCode,
													}
												)}
											>
												{code.sampleCode || '-'}
											</b>
											<span className='mt-[2px] inline-block text-center text-[12px] text-nowrap text-gray-500'>
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
