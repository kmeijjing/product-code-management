import clsx from 'clsx';
import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import type { CodeField, CodePattern } from '@/types/codePattern';
import { FaBars } from 'react-icons/fa6';

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
			className={clsx(
				'flex min-h-[48px] cursor-move flex-nowrap items-center rounded-[8px] border px-[20px]',
				{
					'border-blue-200 bg-blue-50': active,
					'border-gray-200 bg-gray-50': !active,
				}
			)}
		>
			<FaBars className='text-[13px] text-gray-400' />
			<strong className='ml-[16px] text-[14px]'>
				{CODE_FIELD_LABELS[fieldName]}
			</strong>

			<div className='ml-auto flex flex-nowrap items-center	gap-x-[6px] text-[12px] text-gray-500'>
				<span>코드</span>
				<b className='text-blue-500'>{codePattern.length}자리</b>
			</div>
		</li>
	);
};

export default DraggableCodeItem;
