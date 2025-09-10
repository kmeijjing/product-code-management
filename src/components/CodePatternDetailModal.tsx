import type { CodePattern } from '@/types/codePattern';
import ModalCard from '@/components/ModalCard';
import Tag from '@/components/Tag';
import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import type { OnCancel } from '@/contexts/ModalProvider';
import { CODE_DATA } from '@/constants/codes';

export const CodePatternDetailModal = ({
	codePattern,
	onCancel,
}: {
	codePattern: CodePattern;
	onCancel: OnCancel;
}) => {
	return (
		<ModalCard
			title='항목별 코드 관리'
			bodyClassName='w-[500px]'
			onCancel={onCancel}
		>
			<section className=''>
				<div className='flex flex-nowrap items-center gap-x-[8px]'>
					<Tag
						type='light'
						color='blue'
						textClass='text-[12px]'
						label='항목 데이터'
					/>
					<b className='text-[12px]'>{CODE_FIELD_LABELS[codePattern.field]}</b>
				</div>

				<div className='my-[6px] h-[1px] w-full bg-gray-200'></div>

				<div className='flex flex-nowrap items-center gap-x-[8px]'>
					<Tag
						type='light'
						color='blue'
						textClass='text-[12px]'
						label='코드 자릿수'
					/>
					<b className='text-[12px]'>{codePattern.length}자리</b>
				</div>
			</section>

			{codePattern.field !== 'sequence' && (
				<section className='mt-[24px] w-full rounded-[8px] border border-gray-200 text-[12px]'>
					<div className='flex flex-nowrap items-center gap-x-[8px] border-b border-gray-300'>
						<div className='flex-1 px-[16px] py-[12px] font-medium'>데이터명</div>
						<div className='flex-1 px-[16px] py-[12px] font-medium'>코드명</div>
					</div>
					{CODE_DATA[codePattern.field].map((data) => (
						<div
							key={data.codeName}
							className='flex flex-nowrap items-center gap-x-[8px]'
						>
							<div className='flex-1 px-[16px] py-[4px]'>{data.value}</div>
							<span className='flex-1 px-[16px] py-[4px]'>{data.codeName}</span>
						</div>
					))}
				</section>
			)}
		</ModalCard>
	);
};

export default CodePatternDetailModal;
