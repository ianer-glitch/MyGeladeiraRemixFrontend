import { Component, OnInit } from '@angular/core';
import { ButtonAddItemComponent } from "../../components/button-add-item/button-add-item.component";
import { ItemComponent } from "../../components/item/item.component";
import { SpeedDialComponent } from "../../../../shared/components/atoms/speed-dial/speed-dial.component";
import { FridgeSpeedDialComponent } from "../fridge-speed-dial/fridge-speed-dial.component";
import { PopupAddFridgeItemComponent } from "../popup-add-fridge-item/popup-add-fridge-item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetFridgeItemsService } from '../../getFridgeItems/get-fridge-items.service';
import GetFridgeItemsOut from '../../getFridgeItems/GetFridgeItemsOut';

@Component({
  selector: 'home-item-list',
  imports: [ButtonAddItemComponent,FormsModule,
     ItemComponent,
     PopupAddFridgeItemComponent,CommonModule],
  templateUrl: './home-item-list.component.html',
  styleUrl: './home-item-list.component.css'
})
export class HomeItemListComponent implements OnInit{
  showPopup:boolean =false
  
  constructor(private getFridgeItemsService : GetFridgeItemsService) {

    
  }

  ngOnInit(): void {
    this.getFridgeItems()
  }

  fridgeItemsList : GetFridgeItemsOut[] = []

  getFridgeItems(){
    this.getFridgeItemsService.getFridgeItems().subscribe(res=> this.fridgeItemsList = res)
  }

  handleClose(close:boolean){
    this.showPopup = close
  }
}
