import { create } from 'zustand';
import type { CodePattern } from '@/types/codePattern';

export interface ProductCodeState {
	activeProductCode: CodePattern[];
	inactiveProductCode: CodePattern[];
	productCode: CodePattern[];
	update: <K extends keyof Omit<ProductCodeState, 'update' | 'reset'>>(
		key: K,
		value: ProductCodeState[K]
	) => void;
	reset: () => void;
}

const INIT_STATE: Omit<ProductCodeState, 'update' | 'reset'> = {
	activeProductCode: [],
	inactiveProductCode: [],
	productCode: [],
};

export const useProductCodeStore = create<ProductCodeState>((set) => ({
	...INIT_STATE,

	update: (key, value) =>
		set((state) => ({
			...state,
			[key]: value,
		})),
	reset: () => set(() => INIT_STATE),
}));
