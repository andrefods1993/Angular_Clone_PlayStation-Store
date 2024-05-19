import { Component } from '@angular/core';
import { CardPreCarouselComponent } from "../../../components/card-pre-carousel/card-pre-carousel.component";

@Component({
    selector: 'app-section-pre',
    standalone: true,
    templateUrl: './section-pre.component.html',
    styleUrl: './section-pre.component.css',
    imports: [CardPreCarouselComponent]
})
export class SectionPreComponent {

}
