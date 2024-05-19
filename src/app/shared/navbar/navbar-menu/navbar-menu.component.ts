import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/interface/menu-item.interface';
import { MenuService } from '../../../services/menu.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-navbar-menu',
	standalone: true,
	imports: [NgFor, RouterLink],
	templateUrl: './navbar-menu.component.html',
	styleUrl: './navbar-menu.component.css',
})
export class NavbarMenuComponent implements OnInit {
	menuItems: MenuItem[] = [];

	constructor(private menuService: MenuService) {}

	ngOnInit(): void {
		this.menuItems = this.menuService.getMenuItems();
	}
}
