import clsx from 'clsx';
import { ReactNode, Children, isValidElement, useMemo } from 'react';

type SectionName = 'Header' | 'HeaderRight' | 'Body';

export interface SectionHeaderCardProps {
	title?: string | ReactNode;
	subTitle?: string | ReactNode;
	children?: ReactNode;
	className?: string;
	headerClass?: string;
}

const SectionHeaderCard = ({
	title,
	subTitle,
	children,
	className = '',
	headerClass = '',
}: SectionHeaderCardProps) => {
	const sections = useMemo(() => {
		const sectionMap: Record<SectionName, ReactNode> = {
			Header: null as ReactNode,
			HeaderRight: null as ReactNode,
			Body: null as ReactNode,
		};

		Children.forEach(children, (child) => {
			if (isValidElement(child)) {
				switch (child.type) {
					case SectionHeaderCard.Header:
						sectionMap.Header = child;
						break;
					case SectionHeaderCard.HeaderRight:
						sectionMap.HeaderRight = child;
						break;
					case SectionHeaderCard.Body:
						sectionMap.Body = child;
						break;
					default:
						break;
				}
			}
		});

		return sectionMap;
	}, [children]);

	return (
		<div
			className={clsx(
				'overflow-hidden rounded-[12px] border border-gray-300 bg-white',
				className
			)}
		>
			<div
				className={clsx(
					'z-10 flex h-[56px] items-center justify-between border-b border-gray-300 px-[24px]',
					headerClass
				)}
				role='banner'
				aria-label={typeof title === 'string' ? title : 'Section header'}
			>
				{!sections.Header ? (
					<div className='z-20 flex w-full flex-nowrap items-center'>
						{typeof title === 'string' ? (
							<strong className='text-[15px]'>{title}</strong>
						) : (
							<>{title}</>
						)}

						{subTitle && (
							<div className='ml-[8px] text-[11px] text-gray-500'>{subTitle}</div>
						)}

						{sections.HeaderRight && (
							<div className='ml-auto'>{sections.HeaderRight}</div>
						)}
					</div>
				) : (
					<div className='z-20 w-full'>{sections.Header}</div>
				)}
			</div>
			{sections.Body}
		</div>
	);
};

export interface ChildProps {
	children: ReactNode;
	className?: string;
}

const SectionHeader = ({ children, className = '' }: ChildProps) => (
	<div className={clsx('flex w-full flex-nowrap items-center', className)}>
		{children}
	</div>
);

const SectionHeaderRight = ({ children, className = '' }: ChildProps) => (
	<div className={clsx('flex flex-nowrap items-center gap-x-[8px]', className)}>
		{children}
	</div>
);

const SectionBody = ({ children, className = '' }: ChildProps) => (
	<div className={clsx('relative z-10', className)}>{children}</div>
);

SectionHeaderCard.Header = SectionHeader;
SectionHeaderCard.HeaderRight = SectionHeaderRight;
SectionHeaderCard.Body = SectionBody;

SectionHeader.displayName = 'SectionHeader';
SectionHeaderRight.displayName = 'SectionHeaderRight';
SectionBody.displayName = 'SectionBody';

export default SectionHeaderCard;
