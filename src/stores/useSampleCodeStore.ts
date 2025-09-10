import { create } from 'zustand';
import type { CodePattern } from '@/types/codePattern';

export interface CodeState {
	sampleCode: {
		product: CodePattern[];
		option: CodePattern[];
	};
	updateCode: (key: keyof CodeState, value: any) => void;
	resetCode: () => void;
}

const INIT_CODE_STATE: CodeState['sampleCode'] = {
	product: [],
	option: [],
};

export const useSampleCodeStore = create<CodeState>((set) => ({
	sampleCode: INIT_CODE_STATE,

	updateCode: (key, value) =>
		set((state) => ({
			...state,
			[key]: value,
		})),
	resetCode: () => set(() => ({ sampleCode: INIT_CODE_STATE })),
}));
