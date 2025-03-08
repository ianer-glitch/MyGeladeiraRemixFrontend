import { Component } from '@angular/core';
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";
import { ShoppingListListComponent } from "../../components/shopping-list-list/shopping-list-list.component";
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";

@Component({
  selector: 'app-shopping-list',
  imports: [GenericListItemComponent, ShoppingListListComponent, PageTitleComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
