import { create } from 'zustand';
import type { CodePattern } from '@/types/codePattern';

export interface OptionsCodeState {
	optionCode: CodePattern[];
	updateCode: (key: keyof OptionsCodeState, value: any) => void;
	resetCode: () => void;
}

const INIT_OPTION_CODE_STATE: OptionsCodeState['optionCode'] = [];

export const useOptionCodeStore = create<OptionsCodeState>((set) => ({
	optionCode: INIT_OPTION_CODE_STATE,

	updateCode: (key, value) =>
		set((state) => ({
			...state,
			[key]: value,
		})),
	resetCode: () => set(() => ({ optionCode: INIT_OPTION_CODE_STATE })),
}));
