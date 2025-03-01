import { Component } from '@angular/core';
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";

@Component({
  selector: 'app-shopping-list',
  imports: [GenericListItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
