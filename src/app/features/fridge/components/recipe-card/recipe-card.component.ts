import { Component, input } from '@angular/core';
import { CardComponent } from "../../../../shared/components/atoms/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recipe-card',
  imports: [CardComponent,CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
 title = input<string>("")
 ingredients = input<string[]>([""])
 method = input<string>("")
}
