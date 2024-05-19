import { Injectable } from '@angular/core';
import { Card } from '../models/interface/card.interface';

@Injectable({
	providedIn: 'root',
})
export class CardPreService {
	private cards: Card[] = [
		{
			label: 'game-33',
			route: '#game-33',
			source: '../../assets/images/game-33.png',
			consoles: ['PS4'],
			value: 250,
		},
		{
			label: 'game-34',
			route: '#game-34',
			source: '../../assets/images/game-34.png',
			consoles: ['PS4'],
			value: 300,
		},
		{
			label: 'game-35',
			route: '#game-35',
			source: '../../assets/images/game-35.png',
			consoles: ['PS4'],
			value: 99.9,
		},
		{
			label: 'game-36',
			route: '#game-36',
			source: '../../assets/images/game-36.png',
			consoles: ['PS4', 'PS5'],
			value: 123.3,
		},
		{
			label: 'game-37',
			route: '#game-37',
			source: '../../assets/images/game-37.jpg',
			consoles: ['PS4', 'PS5'],
			value: 40.5,
		},
		{
			label: 'game-38',
			route: '#game-38',
			source: '../../assets/images/game-38.png',
			consoles: ['PS5'],
			value: 200,
		},
		{
			label: 'game-39',
			route: '#game-39',
			source: '../../assets/images/game-39.png',
			consoles: ['PS5'],
			value: 387.25,
		},
		{
			label: 'game-40',
			route: '#game-40',
			source: '../../assets/images/game-40.png',
			consoles: ['PS5'],
			value: 233,
		},
		{
			label: 'game-41',
			route: '#game-41',
			source: '../../assets/images/game-41.png',
			consoles: ['PS4', 'PS5'],
			value: 96,
		},
		{
			label: 'game-42',
			route: '#game-42',
			source: '../../assets/images/game-42.png',
			consoles: ['PS4', 'PS5'],
			value: 212,
		},
		{
			label: 'game-43',
			route: '#game-43',
			source: '../../assets/images/game-43.jpg',
			consoles: ['PS4'],
			value: 167.99,
		},
		{
			label: 'game-44',
			route: '#game-44',
			source: '../../assets/images/game-44.png',
			consoles: ['PS4'],
			value: 123.5,
		},
	];

	getCards(): Card[] {
		return this.cards;
	}
}
