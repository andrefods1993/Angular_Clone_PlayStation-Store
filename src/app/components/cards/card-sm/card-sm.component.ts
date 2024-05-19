import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-card-sm',
	standalone: true,
	imports: [RouterLink, CurrencyPipe, NgFor, NgIf],
	templateUrl: './card-sm.component.html',
	styleUrl: './card-sm.component.css',
})
export class CardSmComponent {
	@Input() label: string = 'game-1';
	@Input() route: string = '#game-1';
	@Input() source: string = '../../assets/images/game-1.png';
	@Input() value: number = 99;
	@Input() consoles: string[] = ['PS4', 'PS5'];
	@Input() hideConsoles: boolean = false;
	@Input() hideValue: boolean = false;

	get displayValue(): string {
		return this.value === 0
			? 'Gratuito'
			: this.value.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
			  });
	}
}
