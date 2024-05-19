import { Injectable } from '@angular/core';
import { Card } from '../models/interface/card.interface';

@Injectable({
	providedIn: 'root',
})
export class CardDemoService {
	private cards: Card[] = [
		{
			label: 'game-1',
			route: '#game-1',
			source: '../../assets/images/game-1.png',
			consoles: ['PS4'],
			value: 0,
		},
		{
			label: 'game-2',
			route: '#game-2',
			source: '../../assets/images/game-2.png',
			consoles: ['PS4', 'PS5'],
			value: 0,
		},
		{
			label: 'game-3',
			route: '#game-3',
			source: '../../assets/images/game-3.png',
			consoles: ['PS4', 'PS5'],
			value: 0,
		},
		{
			label: 'game-4',
			route: '#game-4',
			source: '../../assets/images/game-4.jpg',
			consoles: ['PS5'],
			value: 0,
		},
		{
			label: 'game-5',
			route: '#game-5',
			source: '../../assets/images/game-5.png',
			consoles: ['PS5'],
			value: 0,
		},
		{
			label: 'game-6',
			route: '#game-6',
			source: '../../assets/images/game-6.png',
			consoles: ['PS4', 'PS5'],
			value: 0,
		},
		{
			label: 'game-7',
			route: '#game-7',
			source: '../../assets/images/game-7.png',
			consoles: ['PS4'],
			value: 0,
		},
		{
			label: 'game-8',
			route: '#game-8',
			source: '../../assets/images/game-8.png',
			consoles: ['PS4', 'PS5'],
			value: 0,
		},
		{
			label: 'game-9',
			route: '#game-9',
			source: '../../assets/images/game-9.png',
			consoles: ['PS4'],
			value: 0,
		},
		{
			label: 'game-10',
			route: '#game-10',
			source: '../../assets/images/game-10.png',
			consoles: ['PS4'],
			value: 0,
		},
		{
			label: 'game-11',
			route: '#game-11',
			source: '../../assets/images/game-11.png',
			consoles: ['PS4', 'PS5'],
			value: 0,
		},
		{
			label: 'game-12',
			route: '#game-12',
			source: '../../assets/images/game-12.jpg',
			consoles: ['PS4'],
			value: 0,
		},
	];

	getCards(): Card[] {
		return this.cards;
	}
}
