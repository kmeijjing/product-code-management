import { create } from 'zustand';

interface ModalStackState {
	stack: (() => void)[]; // 모달 닫기 함수 배열
	pushModal: (onCancel: () => void) => void;
	popModal: () => void;
	getTopModal: () => (() => void) | undefined;
}

export const useModalStore = create<ModalStackState>((set, get) => ({
	stack: [],
	pushModal: (onCancel) =>
		set((state) => ({ stack: [...state.stack, onCancel] })),
	popModal: () => set((state) => ({ stack: state.stack.slice(0, -1) })),
	getTopModal: () => {
		const stack = get().stack;
		return stack.length > 0 ? stack[stack.length - 1] : undefined;
	},
}));
