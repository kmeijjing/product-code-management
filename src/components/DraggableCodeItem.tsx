import { CODE_FIELD_LABELS } from '@/constants/codePatterns';
import type { CodeField } from '@/types/codePattern';
import clsx from 'clsx';

export const DraggableCodeItem = ({
	fieldName,
	active,
}: {
	fieldName: CodeField;
	active: boolean;
}) => {
	return (
		<li
			className={clsx(
				'flex min-h-[48px]  cursor-move items-center rounded-[8px] border px-[20px] py-[8px]',
				{
					'border-blue-300 bg-blue-50': active,
					'border-gray-300 bg-gray-50': !active,
				}
			)}
		>
			<strong className='text-[14px]'>{CODE_FIELD_LABELS[fieldName]}</strong>
		</li>
	);
};

export default DraggableCodeItem;
