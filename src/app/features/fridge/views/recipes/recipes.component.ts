import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";
import { RecipesListComponent } from "../../components/recipes-list/recipes-list.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'recipes',
  imports: [PageTitleComponent, RecipesListComponent,TranslocoDirective],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class RecipesComponent {
 translocoPath="fridge.recipes"
}
