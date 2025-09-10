import clsx from 'clsx';
import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import type { CodeField, CodePattern } from '@/types/codePattern';
import { FaBars } from 'react-icons/fa6';
import { IoAlertCircle } from 'react-icons/io5';
import { FaAsterisk } from 'react-icons/fa6';

export const DraggableCodeItem = ({
	fieldName,
	active,
	codePattern,
}: {
	fieldName: CodeField;
	active: boolean;
	codePattern: CodePattern;
}) => {
	return (
		<li
			id={`${codePattern.fieldGroup}_${codePattern.field}`}
			data-dnd-disabled={
				codePattern.fieldGroup === 'product' && codePattern.field === 'sequence'
					? true
					: undefined
			}
			className={clsx(
				'flex min-h-[48px] cursor-move flex-nowrap items-center rounded-[8px] border px-[20px]',
				{
					'border-blue-200 bg-blue-50': active,
					'border-gray-200 bg-gray-50': !active,
					'cursor-not-allowed':
						codePattern.fieldGroup === 'product' && codePattern.field === 'sequence',
				}
			)}
		>
			<FaBars className='text-[13px] text-gray-400' />
			<strong className='ml-[16px] text-[14px]'>
				{CODE_FIELD_LABELS[fieldName]}
			</strong>
			{codePattern.fieldGroup === 'product' &&
				codePattern.field === 'sequence' && (
					<FaAsterisk className='ml-[4px] text-[12px] text-blue-400' />
				)}

			<div className='ml-auto flex flex-nowrap items-center	gap-x-[12px] text-[12px] text-gray-500'>
				{!codePattern.sampleCode && (
					<div className='flex items-center gap-x-[4px]'>
						<IoAlertCircle className='text-gray-400' />
						<span>추가 필요</span>
					</div>
				)}

				<div className='flex flex-nowrap items-center gap-x-[4px]'>
					<span>코드</span>
					<b className='text-blue-500'>{codePattern.length}자리</b>
				</div>
			</div>
		</li>
	);
};

export default DraggableCodeItem;
