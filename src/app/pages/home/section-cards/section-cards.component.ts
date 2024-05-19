import { Component } from '@angular/core';
import { CardMdComponent } from '../../../components/cards/card-md/card-md.component';
import { Card } from '../../../models/interface/card.interface';
import { CardService } from '../../../services/card.service';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-section-cards',
	standalone: true,
	templateUrl: './section-cards.component.html',
	styleUrl: './section-cards.component.css',
	imports: [CardMdComponent, NgFor],
})
export class SectionCardsComponent {
	cards: Card[] = [];

	constructor(private cardService: CardService) {}

	ngOnInit(): void {
		this.cards = this.cardService.getCards();
	}
}
