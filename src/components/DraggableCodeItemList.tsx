import clsx from 'clsx';

export const DraggableCodeItemList = ({
	ref,
	active,
	children,
	className = '',
}: {
	ref: React.Ref<HTMLUListElement>;
	active: boolean;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<ul
			ref={ref}
			className={clsx(
				`flex h-[200px] flex-col gap-y-[8px] overflow-y-auto  px-[20px] py-[16px] ${className}`,
				{
					'bg-gray-50': active,
					'bg-white': !active,
				}
			)}
		>
			{!active && (
				<li>
					<strong className='text-[12px] text-gray-500'>미사용 항목</strong>
				</li>
			)}
			{children}
		</ul>
	);
};

export default DraggableCodeItemList;
