import { Injectable } from '@angular/core';
import { Card } from '../models/interface/card.interface';

@Injectable({
	providedIn: 'root',
})
export class CardBestService {
	private cards: Card[] = [
		{
			label: 'game-9',
			route: '#game-9',
			source: '../../assets/images/game-9.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-10',
			route: '#game-10',
			source: '../../assets/images/game-10.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-11',
			route: '#game-11',
			source: '../../assets/images/game-11.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-12',
			route: '#game-12',
			source: '../../assets/images/game-12.jpg',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-13',
			route: '#game-13',
			source: '../../assets/images/game-13.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-14',
			route: '#game-14',
			source: '../../assets/images/game-14.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-15',
			route: '#game-15',
			source: '../../assets/images/game-15.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-16',
			route: '#game-16',
			source: '../../assets/images/game-16.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-17',
			route: '#game-17',
			source: '../../assets/images/game-17.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-18',
			route: '#game-18',
			source: '../../assets/images/game-18.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-19',
			route: '#game-19',
			source: '../../assets/images/game-19.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
		{
			label: 'game-20',
			route: '#game-20',
			source: '../../assets/images/game-20.png',
			consoles: ['PS4', 'PS5'],
			value: 100,
		},
	];

	getCards(): Card[] {
		return this.cards;
	}
}
