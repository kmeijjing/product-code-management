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
				`flex flex-col gap-y-[8px] overflow-y-auto px-[20px] py-[16px] ${className}`,
				{
					'h-[200px] bg-gray-50': active,
					'h-[180px] bg-white': !active,
				}
			)}
		>
			{children}
		</ul>
	);
};

export default DraggableCodeItemList;
