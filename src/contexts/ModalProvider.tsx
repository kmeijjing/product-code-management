'use client';

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	useRef,
} from 'react';
import Modal from '@/components/Modal';
import { createPortal } from 'react-dom';

export type OnOk = (data?: any) => void;
export type OnCancel = () => void;

type ModalOptions<T = any, P = Record<string, any>> = {
	content: (props: { onOk?: OnOk; onCancel?: OnCancel } & P) => ReactNode;
	contentProps?: P;
	persistent?: boolean;
	onOk?: OnOk;
	onCancel?: OnCancel;
};

type ModalContextType = {
	createModal: <T, P = Record<string, any>>(
		options: ModalOptions<T, P>
	) => Promise<T | null>;
	closeTopModal: (data?: any) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modals, setModals] = useState<ModalOptions<any, any>[]>([]);
	const [modalResolves, setModalResolves] = useState<
		((value: any | null) => void)[]
	>([]);
	const modalContainerRef = useRef<HTMLDivElement | null>(null);
	const previousActiveElement = useRef<HTMLElement | null>(null);

	const createModal = <T, P = Record<string, any>>(
		options: ModalOptions<T, P>
	): Promise<T | null> => {
		return new Promise<T | null>((resolve) => {
			setModals((prev) => [...prev, options]);
			setModalResolves((prev) => [...prev, resolve]);
		});
	};

	const closeTopModal = (data: any | null = null) => {
		if (modals.length === 0) return;

		setModals((prev) => prev.slice(0, -1));

		setModalResolves((prev) => {
			const lastResolve = prev[prev.length - 1];
			lastResolve?.(data); // ✅ 안전한 함수 호출
			return prev.slice(0, -1);
		});

		// 모달이 닫힐 때 이전에 포커스된 요소로 포커스 복원
		setTimeout(() => {
			previousActiveElement.current?.focus();
		}, 0);
	};

	const getBodyScrollbarWidth = () => {
		return window.innerWidth - document.documentElement.offsetWidth;
	};

	const blockBodyScroll = () => {
		const className = 'overflow-hidden';
		const isBlocked = document.body.classList.contains(className);
		if (isBlocked) return;

		document.body.style.setProperty(
			'--scrollbar-width',
			`${getBodyScrollbarWidth()}px`
		);
		document.body.classList.add(className);
	};

	const unblockBodyScroll = () => {
		const className = 'overflow-hidden';
		const isBlocked = document.body.classList.contains(className);
		if (!isBlocked) return;

		document.body.style.removeProperty('--scrollbar-width');
		document.body.classList.remove(className);
	};

	const handleTabKey = (event: KeyboardEvent) => {
		if (event.key !== 'Tab' || !modalContainerRef.current) return;

		const focusableElements = modalContainerRef.current.querySelectorAll(
			'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
		) as NodeListOf<HTMLElement>;

		if (focusableElements.length === 0) return;

		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault();
			lastElement.focus();
		} else if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault();
			firstElement.focus();
		}
	};

	useEffect(() => {
		if (modals.length > 0) {
			blockBodyScroll();

			// 현재 포커스된 요소 저장
			previousActiveElement.current = document.activeElement as HTMLElement;

			// 모달이 열릴 때 첫 번째 포커스 가능한 요소로 이동
			setTimeout(() => {
				const focusableElements = modalContainerRef.current?.querySelectorAll(
					'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
				) as NodeListOf<HTMLElement>;

				if (focusableElements?.length > 0) {
					focusableElements[0].focus();
				}
			}, 0);

			document.addEventListener('keydown', handleTabKey);
		} else if (modals.length === 0) {
			unblockBodyScroll();
		}

		return () => {
			document.removeEventListener('keydown', handleTabKey);
		};
	}, [modals]);

	return (
		<ModalContext.Provider value={{ createModal, closeTopModal }}>
			{children}
			{modals.map((modal, index) =>
				createPortal(
					<div
						key={index}
						role='dialog'
						ref={modalContainerRef}
						aria-modal='true'
					>
						<Modal
							onOk={(data) => {
								modal?.onOk?.(data);
								closeTopModal(data);
							}}
							onCancel={() => {
								modal?.onCancel?.();
								closeTopModal(null);
							}}
						>
							{typeof modal.content === 'function' &&
								modal.content({
									...modal.contentProps,
									onOk: (data: any) => {
										modal?.onOk?.(data);
										closeTopModal(data);
									},
									onCancel: () => {
										modal?.onCancel?.();
										closeTopModal(null);
									},
								})}
						</Modal>
					</div>,
					document.body
				)
			)}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
};
