import { Component } from '@angular/core';
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";

@Component({
  selector: 'shopping-list-list',
  imports: [GenericListItemComponent],
  templateUrl: './shopping-list-list.component.html',
  styleUrl: './shopping-list-list.component.css'
})
export class ShoppingListListComponent {

}
