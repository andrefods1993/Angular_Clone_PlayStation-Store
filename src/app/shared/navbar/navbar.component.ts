import { Component } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
	imports: [NavbarMenuComponent, RouterLink],
})
export class NavbarComponent {
	logo: string = '../../../assets/images/playstation-store-logo.png';
}
