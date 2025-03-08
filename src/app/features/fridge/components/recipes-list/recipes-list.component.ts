import { Component } from '@angular/core';
import { CardComponent } from "../../../../shared/components/atoms/card/card.component";
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";

@Component({
  selector: 'recipes-list',
  imports: [CardComponent, RecipeCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

}
