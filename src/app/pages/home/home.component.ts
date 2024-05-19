import { Component } from '@angular/core';
import { HeaderHomeComponent } from "./header-home/header-home.component";
import { SectionCardsComponent } from "./section-cards/section-cards.component";
import { SectionBestComponent } from "./section-best/section-best.component";
import { SectionNewsComponent } from "./section-news/section-news.component";
import { SectionPreComponent } from "./section-pre/section-pre.component";
import { SectionDemoComponent } from "./section-demo/section-demo.component";
import { SectionMoreComponent } from "./section-more/section-more.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderHomeComponent, SectionCardsComponent, SectionBestComponent, SectionNewsComponent, SectionPreComponent, SectionDemoComponent, SectionMoreComponent]
})
export class HomeComponent {}
