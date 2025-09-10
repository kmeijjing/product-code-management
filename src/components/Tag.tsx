import { ReactNode } from 'react';
import clsx from 'clsx';

export type Color =
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'purple'
	| 'blue'
	| 'grey';

export interface TagProps {
	label: string;
	children?: ReactNode;
	type?: 'default' | 'light' | 'white';
	color?: Color;
	rounded?: boolean;
	textClass?: string;
	className?: string;
	onClick?: () => void;
}

const Tag = ({
	label,
	children,
	type = 'light',
	color = 'grey',
	rounded = false,
	textClass = '',
	className = '',
	onClick,
}: TagProps) => {
	const roundedClass = rounded
		? 'rounded-[16px] h-[20px] leading-[20px]'
		: 'rounded-[6px] h-[22px] leading-[22px]';

	const fixColors = {
		default: {
			red: 'bg-red-500 !text-white',
			orange: 'bg-orange-500 !text-white',
			yellow: 'bg-yellow-500 !text-white',
			green: 'bg-green-500 !text-white',
			purple: 'bg-purple-500 !text-white',
			blue: 'bg-blue-500 !text-white',
			grey: 'bg-grey-500 !text-white',
		} as Record<Color, string>,
		light: {
			red: 'bg-red-100 text-red-500',
			orange: 'bg-orange-100 text-orange-500',
			yellow: 'bg-yellow-100 text-yellow-500',
			green: 'bg-green-100 text-green-500',
			purple: 'bg-purple-100 text-purple-500',
			blue: 'bg-blue-100 text-blue-500',
			grey: 'bg-grey-100 text-grey-500',
		} as Record<Color, string>,
		white: {
			red: 'bg-white text-red-500',
			orange: 'bg-white text-orange-500',
			yellow: 'bg-white text-yellow-500',
			green: 'bg-white text-green-500',
			purple: 'bg-white text-purple-500',
			blue: 'bg-white text-blue-500',
			grey: 'bg-white text-grey-500',
		} as Record<Color, string>,
	};

	const colorClasses = fixColors[type][color];

	return (
		label && (
			<label
				onClick={onClick}
				className={clsx(
					's-tag flex w-fit flex-nowrap items-center justify-center gap-[8px] px-[8px] !text-[12px] font-bold',
					colorClasses,
					roundedClass,
					onClick && 'cursor-pointer',
					className
				)}
			>
				{children || (
					<span className={clsx(textClass, 'whitespace-nowrap')}>{label}</span>
				)}
			</label>
		)
	);
};

export default Tag;
