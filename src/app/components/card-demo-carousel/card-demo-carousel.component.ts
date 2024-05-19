import { Component, OnInit, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Card } from '../../models/interface/card.interface';
import { CardSmComponent } from '../cards/card-sm/card-sm.component';
import { CardDemoService } from '../../services/card-demo.service';

@Component({
	selector: 'app-card-demo-carousel',
	standalone: true,
	imports: [CardSmComponent, NgFor, NgIf],
	templateUrl: './card-demo-carousel.component.html',
	styleUrls: ['./card-demo-carousel.component.css'],
})
export class CardDemoCarouselComponent implements OnInit {
	cards: Card[] = [];
	currentIndex: number = 0;
	itemsPerPage: number = 6;
	transform: string = 'translateX(0)';

	constructor(private cardService: CardDemoService) {}

	ngOnInit(): void {
		this.cards = this.cardService.getCards();
		this.updateItemsPerPage();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.updateItemsPerPage();
	}

	updateItemsPerPage(): void {
		const width = window.innerWidth;
		if (width < 490) {
			this.itemsPerPage = 1;
		} else if (width < 600) {
			this.itemsPerPage = 2;
		} else if (width < 768) {
			this.itemsPerPage = 3;
		} else if (width < 960) {
			this.itemsPerPage = 4;
		} else if (width < 1200) {
			this.itemsPerPage = 5;
		} else {
			this.itemsPerPage = 6;
		}
	}

	nextPage(): void {
		if (this.currentIndex + this.itemsPerPage < this.cards.length) {
			this.currentIndex += this.itemsPerPage;
		}
	}

	prevPage(): void {
		if (this.currentIndex - this.itemsPerPage >= 0) {
			this.currentIndex -= this.itemsPerPage;
		}
	}

	shouldShowPrevButton(): boolean {
		return this.currentIndex > 0;
	}
}
