import { create } from 'zustand';
import type { CodePattern } from '@/types/codePattern';

export interface OptionCodeState {
	activeOptionCode: CodePattern[];
	inactiveOptionCode: CodePattern[];
	optionCode: CodePattern[];
	update: <K extends keyof Omit<OptionCodeState, 'update' | 'reset'>>(
		key: K,
		value: OptionCodeState[K]
	) => void;
	reset: () => void;
}

const INIT_STATE: Omit<OptionCodeState, 'update' | 'reset'> = {
	activeOptionCode: [],
	inactiveOptionCode: [],
	optionCode: [],
};

export const useOptionCodeStore = create<OptionCodeState>((set) => ({
	...INIT_STATE,

	update: (key, value) =>
		set((state) => ({
			...state,
			[key]: value,
		})),
	reset: () => set(() => INIT_STATE),
}));
