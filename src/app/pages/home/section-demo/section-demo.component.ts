import { Component } from '@angular/core';
import { CardDemoCarouselComponent } from "../../../components/card-demo-carousel/card-demo-carousel.component";

@Component({
    selector: 'app-section-demo',
    standalone: true,
    templateUrl: './section-demo.component.html',
    styleUrl: './section-demo.component.css',
    imports: [CardDemoCarouselComponent]
})
export class SectionDemoComponent {

}
