import { Component } from '@angular/core';
import { CardBestCarouselComponent } from '../../../components/card-best-carousel/card-best-carousel.component';

@Component({
	selector: 'app-section-best',
	standalone: true,
	templateUrl: './section-best.component.html',
	styleUrl: './section-best.component.css',
	imports: [CardBestCarouselComponent],
})
export class SectionBestComponent {}
