import { Injectable } from '@angular/core';
import { Card } from '../models/interface/card.interface';

@Injectable({
	providedIn: 'root',
})
export class CardNewsService {
	private cards: Card[] = [
		{
			label: 'game-21',
			route: '#game-21',
			source: '../../assets/images/game-21.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-22',
			route: '#game-22',
			source: '../../assets/images/game-22.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-23',
			route: '#game-23',
			source: '../../assets/images/game-23.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-24',
			route: '#game-24',
			source: '../../assets/images/game-24.jpg',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-25',
			route: '#game-25',
			source: '../../assets/images/game-25.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-26',
			route: '#game-26',
			source: '../../assets/images/game-26.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-27',
			route: '#game-27',
			source: '../../assets/images/game-27.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-28',
			route: '#game-28',
			source: '../../assets/images/game-28.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-29',
			route: '#game-29',
			source: '../../assets/images/game-29.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-30',
			route: '#game-30',
			source: '../../assets/images/game-30.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-31',
			route: '#game-31',
			source: '../../assets/images/game-31.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-32',
			route: '#game-32',
			source: '../../assets/images/game-32.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
	];

	getCards(): Card[] {
		return this.cards;
	}
}
