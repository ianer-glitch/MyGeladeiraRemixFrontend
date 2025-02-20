import { Component } from '@angular/core';
import { ButtonAddItemComponent } from "../../components/button-add-item/button-add-item.component";
import { ItemComponent } from "../../components/item/item.component";
import { SpeedDialComponent } from "../../../../shared/components/atoms/speed-dial/speed-dial.component";
import { FridgeSpeedDialComponent } from "../fridge-speed-dial/fridge-speed-dial.component";

@Component({
  selector: 'home-item-list',
  imports: [ButtonAddItemComponent, ItemComponent, SpeedDialComponent, FridgeSpeedDialComponent],
  templateUrl: './home-item-list.component.html',
  styleUrl: './home-item-list.component.css'
})
export class HomeItemListComponent {

}
