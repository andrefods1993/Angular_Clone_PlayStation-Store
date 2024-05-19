import { Component } from '@angular/core';
import { DefaultButtonComponent } from "../../../components/buttons/default-button/default-button.component";

@Component({
    selector: 'app-section-more',
    standalone: true,
    templateUrl: './section-more.component.html',
    styleUrl: './section-more.component.css',
    imports: [DefaultButtonComponent]
})
export class SectionMoreComponent {

}
