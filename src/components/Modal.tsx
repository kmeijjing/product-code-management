import { ReactNode } from 'react';

interface ModalProps {
	children:
		| ReactNode
		| ((props: {
				onOk: (data?: any) => void;
				onCancel: () => void;
		  }) => ReactNode);
	onCancel: () => void;
	onOk: (data?: any) => void;
}

const Modal = ({ children, onOk, onCancel }: ModalProps) => {
	return (
		<div>
			{typeof children === 'function' ? children({ onOk, onCancel }) : children}
		</div>
	);
};

export default Modal;
