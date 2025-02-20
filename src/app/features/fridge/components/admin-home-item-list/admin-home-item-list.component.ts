import { Component } from '@angular/core';
import { ButtonAddItemComponent } from "../button-add-item/button-add-item.component";
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'admin-home-item-list',
  imports: [ButtonAddItemComponent, ItemComponent],
  templateUrl: './admin-home-item-list.component.html',
  styleUrl: './admin-home-item-list.component.css'
})
export class AdminHomeItemListComponent {

}
