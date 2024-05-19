import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-card-md',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './card-md.component.html',
	styleUrl: './card-md.component.css',
})
export class CardMdComponent {
	@Input() label: string = 'game-1';
	@Input() route: string = '#game-1';
	@Input() source: string = '../../assets/images/game-1.png';
}
