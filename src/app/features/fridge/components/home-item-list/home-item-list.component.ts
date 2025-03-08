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
import { UpdateMultipleFridgeItemsQuantitiesService } from '../../updateMultipleFridgeItemsQuantities/update-multiple-fridge-items-quantities.service';
import UpdateMultipleFridgeItemsQuantitiesIn from '../../updateMultipleFridgeItemsQuantities/UpdateMultipleFridgeItemsQuantitiesIn';
import { Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import UpdateMultipleFridgeItemsQuantitiesOut from '../../updateMultipleFridgeItemsQuantities/UpdateMultipleFridgeItemsQuantitiesOut';
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";

@Component({
  selector: 'home-item-list',
  imports: [ButtonAddItemComponent, FormsModule,
    ItemComponent,
    PopupAddFridgeItemComponent, CommonModule, FridgeSpeedDialComponent, ConfirmationButtonsComponent, SkeletonComponent],
  templateUrl: './home-item-list.component.html',
  styleUrl: './home-item-list.component.css'
})
export class HomeItemListComponent implements OnInit{
  showPopup:boolean =false
  
  
  constructor(
    private getFridgeItemsService : GetFridgeItemsService,
    private localStorageService : LocalStorageService,
    private router:Router,
    private updateMultipleService : UpdateMultipleFridgeItemsQuantitiesService,
    private toastService : ToastService
  ) {

    
  }

  ngOnInit(): void {
    this.getFridgeItems()
  }

  fridgeItemsList : GetFridgeItemsOut[] = []

  getFridgeItems(){
    this.isLoading = true
    const options :Observer<GetFridgeItemsOut[]> = {
      next:(res)=>{
        this.fridgeItemsList = res
      },
      error:()=>{
        this.toastService.showError("Não foi possível buscar os items")
        this.isLoading = false
      },
      complete:()=>{
        this.isLoading = false
      }
    }
    this.getFridgeItemsService.getFridgeItems().subscribe(options)
  }

  handleClose(){
    this.showPopup = false
    this.getFridgeItems()
  }

  handleClickItem(item:GetFridgeItemsOut){
    if(this.isMultipleAdd){
      item.quantity++
      return 

    }
    if(this.isMultipleSub && item.quantity > 0){
      item.quantity--
      return 
    }
    this.localStorageService.setItem('/fridge/item-edit',item)
    this.router.navigate(['/fridge/item-edit'])
  }
  
  isMultipleAdd  = false
  isMultipleSub = false

  handleAddMultiple(){
    this.isMultipleAdd = true
  }

  handleRemoveMultiple(){
    this.isMultipleSub = true
  }

  handleDenyEditing(){
    this.isMultipleAdd = false  
    this.isMultipleSub = false
    this.getFridgeItems()
  }

  isLoading : boolean = false

  updateMultipleFridgeItemsQuantities(){
    this.isLoading=true
    const payload : UpdateMultipleFridgeItemsQuantitiesIn[] = 
      this.fridgeItemsList.map(m=> new UpdateMultipleFridgeItemsQuantitiesIn(m.itemId,m.quantity))

    
    const options:Observer<UpdateMultipleFridgeItemsQuantitiesOut> = {
      next:()=>{ 
        this.toastService.showSucces('As quantidades foram atualizadas!')
        this.getFridgeItems()
      },
      error:()=>{
        this.toastService.showError('Ocorreu um erro ao atualizar as quantidades')
        this.getFridgeItems()
        this.isLoading=false
      },
      complete:()=>{
        this.isMultipleAdd = false
        this.isMultipleSub = false
        this.isLoading = false
      }
    }
    
    this.updateMultipleService.updateMultipleFridgeItemsQuantities(payload).subscribe(options)
  }
}
