import { Code } from '@/types/code';
import { CodeField } from '@/types/codePattern';

export const CATEGORY_MOCK_UP_DATA: Code[] = [
	{ id: 1, codeName: 'Tops', value: 'Tops' },
	{ id: 2, codeName: 'Bottoms', value: 'Bottoms' },
	{ id: 3, codeName: 'Dresses', value: 'Dresses' },
	{ id: 4, codeName: 'Outerwear', value: 'Outerwear' },
	{ id: 5, codeName: 'Footwear', value: 'Footwear' },
	{ id: 6, codeName: 'Accessories', value: 'Accessories' },
	{ id: 7, codeName: 'Activewear', value: 'Activewear' },
	{ id: 8, codeName: 'Swimwear', value: 'Swimwear' },
	{ id: 9, codeName: 'Intimates', value: 'Intimates' },
	{ id: 10, codeName: 'Sleepwear', value: 'Sleepwear' },
];

export const YEAR_MOCK_UP_DATA: Code[] = [
	{ id: 1, codeName: '2015', value: '2015' },
	{ id: 2, codeName: '2016', value: '2016' },
	{ id: 3, codeName: '2017', value: '2017' },
	{ id: 4, codeName: '2018', value: '2018' },
	{ id: 5, codeName: '2019', value: '2019' },
	{ id: 6, codeName: '2020', value: '2020' },
	{ id: 7, codeName: '2021', value: '2021' },
	{ id: 8, codeName: '2022', value: '2022' },
	{ id: 9, codeName: '2023', value: '2023' },
	{ id: 10, codeName: '2024', value: '2024' },
];

export const SEASON_MOCK_UP_DATA: Code[] = [
	{ id: 11, codeName: 'Spring', value: 'Spring' },
	{ id: 12, codeName: 'Summer', value: 'Summer' },
	{ id: 13, codeName: 'Fall', value: 'Fall' },
	{ id: 14, codeName: 'Winter', value: 'Winter' },
	{ id: 15, codeName: 'Pre-Spring', value: 'Pre-Spring' },
	{ id: 16, codeName: 'Pre-Fall', value: 'Pre-Fall' },
	{ id: 17, codeName: 'Resort', value: 'Resort' },
	{ id: 18, codeName: 'Holiday', value: 'Holiday' },
	{ id: 19, codeName: 'Cruise', value: 'Cruise' },
	{ id: 20, codeName: 'Festival', value: 'Festival' },
];

export const BRAND_MOCK_UP_DATA: Code[] = [
	{ id: 21, codeName: 'Nike', value: 'Nike' },
	{ id: 22, codeName: 'Adidas', value: 'Adidas' },
	{ id: 23, codeName: 'Puma', value: 'Puma' },
	{ id: 24, codeName: 'Reebok', value: 'Reebok' },
	{ id: 25, codeName: 'Under Armour', value: 'Under Armour' },
	{ id: 26, codeName: 'New Balance', value: 'New Balance' },
	{ id: 27, codeName: 'Asics', value: 'Asics' },
	{ id: 28, codeName: 'Fila', value: 'Fila' },
	{ id: 29, codeName: 'Converse', value: 'Converse' },
	{ id: 30, codeName: 'Vans', value: 'Vans' },
];

export const SIZE_MOCK_UP_DATA: Code[] = [
	{ id: 31, codeName: 'XS', value: 'XS' },
	{ id: 32, codeName: 'S', value: 'S' },
	{ id: 33, codeName: 'M', value: 'M' },
	{ id: 34, codeName: 'L', value: 'L' },
	{ id: 35, codeName: 'XL', value: 'XL' },
	{ id: 36, codeName: 'XXL', value: 'XXL' },
	{ id: 37, codeName: '28', value: '28' },
	{ id: 38, codeName: '30', value: '30' },
	{ id: 39, codeName: '32', value: '32' },
	{ id: 40, codeName: '34', value: '34' },
];

export const COLOR_MOCK_UP_DATA: Code[] = [
	{ id: 41, codeName: 'Black', value: 'Black' },
	{ id: 42, codeName: 'White', value: 'White' },
	{ id: 43, codeName: 'Gray', value: 'Gray' },
	{ id: 44, codeName: 'Navy', value: 'Navy' },
	{ id: 45, codeName: 'Red', value: 'Red' },
	{ id: 46, codeName: 'Blue', value: 'Blue' },
	{ id: 47, codeName: 'Green', value: 'Green' },
	{ id: 48, codeName: 'Yellow', value: 'Yellow' },
	{ id: 49, codeName: 'Pink', value: 'Pink' },
	{ id: 50, codeName: 'Beige', value: 'Beige' },
];

export const CODE_DATA: Record<Exclude<CodeField, 'sequence'>, Code[]> = {
	category: CATEGORY_MOCK_UP_DATA,
	year: YEAR_MOCK_UP_DATA,
	season: SEASON_MOCK_UP_DATA,
	brand: BRAND_MOCK_UP_DATA,
	size: SIZE_MOCK_UP_DATA,
	color: COLOR_MOCK_UP_DATA,
};
