import clsx from 'clsx';

export const DraggableCodeItemList = ({
	active,
	children,
	className = '',
}: {
	active: boolean;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				`h-[200px] overflow-y-auto px-[20px] py-[16px] ${className}`,
				{
					'bg-gray-50': active,
					'bg-white': !active,
				}
			)}
		>
			{!active && (
				<strong className='text-[12px] text-gray-500'>미사용 항목</strong>
			)}
			{children}
		</div>
	);
};

export default DraggableCodeItemList;
