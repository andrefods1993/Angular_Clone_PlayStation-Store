import { Injectable } from '@angular/core';
import { MenuItem } from '../models/interface/menu-item.interface';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	private menuItems: MenuItem[] = [
		{ label: 'Home', route: '/' },
		{ label: 'GitHub', route: 'https://github.com/andrefods1993' },
		{ label: 'Linkedin', route: 'https://www.linkedin.com/in/andrefilipeods' },
		{
			label: 'Instagram',
			route: 'https://www.instagram.com/in/andrefilipeods/',
		},
		{ label: 'E-mail', route: 'mailto:odsandrefilipe@gmail.com' },
	];

	getMenuItems(): MenuItem[] {
		return this.menuItems;
	}
}
