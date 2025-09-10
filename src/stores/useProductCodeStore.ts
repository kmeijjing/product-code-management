import { create } from 'zustand';
import type { CodePattern } from '@/types/codePattern';

export interface ProductCodeState {
	productCode: CodePattern[];
	updateCode: (key: keyof ProductCodeState, value: any) => void;
	resetCode: () => void;
}

const INIT_PRODUCT_CODE_STATE: ProductCodeState['productCode'] = [];

export const useProductCodeStore = create<ProductCodeState>((set) => ({
	productCode: INIT_PRODUCT_CODE_STATE,

	updateCode: (key, value) =>
		set((state) => ({
			...state,
			[key]: value,
		})),
	resetCode: () => set(() => ({ productCode: INIT_PRODUCT_CODE_STATE })),
}));
