import { Component } from '@angular/core';
import { CardNewsCarouselComponent } from "../../../components/card-news-carousel/card-news-carousel.component";

@Component({
    selector: 'app-section-news',
    standalone: true,
    templateUrl: './section-news.component.html',
    styleUrl: './section-news.component.css',
    imports: [CardNewsCarouselComponent]
})
export class SectionNewsComponent {}
