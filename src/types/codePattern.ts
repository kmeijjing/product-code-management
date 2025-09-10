export type CodeField =
	| 'year'
	| 'season'
	| 'brand'
	| 'size'
	| 'color'
	| 'category'
	| 'sequence';
export type CodeGroup = 'product' | 'option';

export interface CodePattern {
	createdAt: string;
	idDefault: boolean;
	field: CodeField;
	fieldGroup: CodeGroup;
	id: number;
	length: number;
	sort: number;
	updatedAt: string;
}
