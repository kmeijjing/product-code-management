import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { OnCancel } from '@/contexts/ModalProvider';
import { useModalStore } from '@/stores/useModalStore';

interface ModalCardProps {
	children: ReactNode;
	title?: string;
	noHeader?: boolean;
	persistent?: boolean;
	headerChild?: ReactNode;
	className?: string;
	headerClassName?: string;
	bodyClassName?: string;
	onCancel?: OnCancel;
}

const ModalCard = ({
	children,
	title,
	noHeader = false,
	persistent = false,
	headerChild,
	className = '',
	headerClassName = '',
	bodyClassName = '',
	onCancel,
}: ModalCardProps) => {
	const [isClosing, setIsClosing] = useState(false);

	const { pushModal, popModal, getTopModal } = useModalStore();

	const onClickCloseBtn = () => {
		setIsClosing(true);
		setTimeout(() => {
			onCancel?.();
		}, 200); // 애니메이션 시간 - 100
	};

	useEffect(() => {
		if (onCancel) pushModal(onCancel);

		const handleEscKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && !persistent) {
				if (getTopModal() === onCancel) {
					onClickCloseBtn();
				}
			}
		};

		document.addEventListener('keydown', handleEscKey);
		return () => {
			document.removeEventListener('keydown', handleEscKey);
			popModal();
		};
	}, [persistent, onCancel, pushModal, popModal, getTopModal]);

	return (
		<div
			className={clsx(
				'dialog__backdrop fixed top-0 right-0 bottom-0 left-0 z-[99999] flex items-center justify-center bg-[rgba(0,0,0,.4)]'
			)}
			onClick={() => {
				if (!persistent) {
					onClickCloseBtn?.();
				}
			}}
		>
			<div
				className={clsx(
					'dialog-card shadow-modalCard min-w-[400px] rounded-[20px] bg-white px-[32px]',
					isClosing ? 'animate-dialogScaleOut' : 'animate-dialogScale',
					className
				)}
				onClick={(e) => e.stopPropagation()}
			>
				{!noHeader && (
					<div
						className={clsx(
							'dialog-card__section header flex flex-nowrap items-center justify-between pt-[24px]',
							headerClassName
						)}
					>
						<strong className={'text-[20px]'}>{title}</strong>

						{headerChild}

						<button
							type='button'
							title='close'
							className='cursor-pointer rounded-[50%] p-[4px] hover:bg-gray-100'
							onClick={onClickCloseBtn}
						>
							<IoCloseOutline className='text-[24px] text-gray-400' />
						</button>
					</div>
				)}

				<div className={clsx('dialog-card__section body py-[40px]', bodyClassName)}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalCard;
