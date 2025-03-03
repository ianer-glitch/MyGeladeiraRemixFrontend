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
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";

@Component({
  selector: 'home-item-list',
  imports: [ButtonAddItemComponent, FormsModule,
    ItemComponent,
    PopupAddFridgeItemComponent, CommonModule, FridgeSpeedDialComponent, ConfirmationButtonsComponent],
  templateUrl: './home-item-list.component.html',
  styleUrl: './home-item-list.component.css'
})
export class HomeItemListComponent implements OnInit{
  showPopup:boolean =false
  
  
  constructor(
    private getFridgeItemsService : GetFridgeItemsService,
    private localStorageService : LocalStorageService,
    private router:Router,
  ) {

    
  }

  ngOnInit(): void {
    this.getFridgeItems()
  }

  fridgeItemsList : GetFridgeItemsOut[] = []

  getFridgeItems(){
    this.getFridgeItemsService.getFridgeItems().subscribe(res=> this.fridgeItemsList = res)
  }

  handleClose(){
    this.showPopup = false
    this.getFridgeItems()
  }

  handleClickItem(item:GetFridgeItemsOut){
  console.info(item)
    this.localStorageService.setItem('/fridge/item-edit',item)
    this.router.navigate(['/fridge/item-edit'])
  }
  isMultipleEditing = false

  handleAddMultiple(){
    this.isMultipleEditing = true
  }

  handleRemoveMultiple(){
    this.isMultipleEditing = true
  }
}
