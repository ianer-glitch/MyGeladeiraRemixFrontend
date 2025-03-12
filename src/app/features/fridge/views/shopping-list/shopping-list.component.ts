import { Component } from '@angular/core';
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";
import { ShoppingListListComponent } from "../../components/shopping-list-list/shopping-list-list.component";
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-shopping-list',
  imports: [
    GenericListItemComponent,
    ShoppingListListComponent,
    PageTitleComponent,TranslocoDirective],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class ShoppingListComponent {
  translocoPath="fridge.shopping-list"
  
}
