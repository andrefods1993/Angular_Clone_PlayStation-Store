import { Component } from '@angular/core';
import { DefaultButtonComponent } from "../../../components/buttons/default-button/default-button.component";

@Component({
    selector: 'app-header-home',
    standalone: true,
    templateUrl: './header-home.component.html',
    styleUrl: './header-home.component.css',
    imports: [DefaultButtonComponent]
})
export class HeaderHomeComponent {

}
