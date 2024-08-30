import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getFormattedDate = (date: Date) => {
	let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
	let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    return [`${date.getDate()} ${months[date.getMonth()].slice(0,3)}`,`${hours}:${minutes}`];
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToTitleCase(str: string) {
	if (!str) {
		return '';
	}
	return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

export type Gist = {
	id: number;
	itemId: number;
	title: string;
	type: string;
	summary: string;
	categories: {
		id: number;
		name: string;
	}[];
	themes: {
		id: number;
		name: string;
	}[];
	description: string;
	url: string;
	by: string;
	descendants: number;
	time: number;
	storyURL: string;
	
};

export const exampleGist = {
	id: 7,
	itemId: 40702782,
	title: "How to get stuff repaired when the manufacturer don't wanna: take 'em to court",
	type: 'top',
	summary:
		'The post provides guidance on how to take legal action against manufacturers who refuse to repair products under warranty.',
	categories: [
		{
			id: 9,
			name: 'repair'
		},
		{
			id: 10,
			name: 'consumer rights'
		}
	],
	themes: [
		{
			id: 9,
			name: 'legal action'
		}
	],
	description: '',
	url: 'https://news.ycombinator.com/item?id=40702782',
	by: 'Aaronn',
	descendants: 99,
	time: 1718604890
};

export const all_gists = new Array(3).fill(exampleGist);
