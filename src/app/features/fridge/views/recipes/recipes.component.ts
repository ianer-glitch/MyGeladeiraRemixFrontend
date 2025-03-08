import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";
import { RecipesListComponent } from "../../components/recipes-list/recipes-list.component";

@Component({
  selector: 'app-recipes',
  imports: [PageTitleComponent, RecipesListComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
