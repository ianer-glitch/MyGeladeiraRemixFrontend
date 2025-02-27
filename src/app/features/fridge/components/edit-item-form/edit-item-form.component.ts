import { Component, OnInit } from '@angular/core';
import { ImgUploadItemComponent } from "../img-upload-item/img-upload-item.component";
import { InputTextComponent } from "../../../../shared/components/organisms/input-text/input-text.component";
import { InputNumberComponent } from "../../../../shared/components/organisms/input-number/input-number.component";
import { ExpirationTimeSelectorComponent } from "../expiration-time-selector/expiration-time-selector.component";
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import GetFridgeItemsOut from '../../getFridgeItems/GetFridgeItemsOut';
import { InputNumberButtonsComponent } from "../../../../shared/components/templates/input-number-buttons/input-number-buttons.component";

@Component({
  selector: 'edit-item-form',
  imports: [FormsModule, CommonModule, ImgUploadItemComponent,
    InputTextComponent,
    InputNumberComponent,
    ExpirationTimeSelectorComponent, ConfirmationButtonsComponent, InputNumberButtonsComponent],
  templateUrl: './edit-item-form.component.html',
  styleUrl: './edit-item-form.component.css'
})
export class EditItemFormComponent implements OnInit {
 
 constructor(
    private localStorageService :LocalStorageService,
    private location : Location) {
  
  
 }
 iconLink:string = ""
 backgroundColor:string=""
 itemName:string =""
  ngOnInit(): void {
    const item = this.localStorageService.getItem<GetFridgeItemsOut>("/fridge/item-edit")
    this.iconLink = item.iconLink
    this.backgroundColor =item.color
    this.itemName = item.name
    
 }

 handleDenyClick(){
  this.location.back()
 }
}
