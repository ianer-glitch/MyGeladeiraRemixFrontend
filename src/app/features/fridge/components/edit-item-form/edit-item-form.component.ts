import { Component, inject, OnInit } from '@angular/core';
import { ImgUploadItemComponent } from "../img-upload-item/img-upload-item.component";
import { InputTextComponent } from "../../../../shared/components/organisms/input-text/input-text.component";
import { InputNumberComponent } from "../../../../shared/components/organisms/input-number/input-number.component";
import { ExpirationTimeSelectorComponent } from "../expiration-time-selector/expiration-time-selector.component";
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import GetFridgeItemsOut from '../../getFridgeItems/GetFridgeItemsOut';
import { InputNumberButtonsComponent } from "../../../../shared/components/templates/input-number-buttons/input-number-buttons.component";
import UpdateFridgeItemIn from '../../updateFridgeItem/UpdateFridgeItemIn';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { UpdateFridgeItemService } from '../../updateFridgeItem/update-fridge-item.service';
import { Observer } from 'rxjs';
import UpdateFridgeItemOut from '../../updateFridgeItem/UpdateFridgeItemOut';
import { ButtonComponent } from "../../../../shared/components/atoms/button/button.component";
import { RemoveItemsFridgeService } from '../../removeItemsFridge/remove-items-fridge.service';
import RemoveItemsFridgeIn from '../../removeItemsFridge/RemoveItemsFridgeIn';
import RemoveItemsFridgeOut from '../../removeItemsFridge/RemoveItemsFridgeOut';

@Component({
  selector: 'edit-item-form',
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule,
    ImgUploadItemComponent,
    InputTextComponent,
    InputNumberComponent,
    ExpirationTimeSelectorComponent, ConfirmationButtonsComponent, InputNumberButtonsComponent, ButtonComponent],
  templateUrl: './edit-item-form.component.html',
  styleUrl: './edit-item-form.component.css'
})
export class EditItemFormComponent implements OnInit {
 
 constructor(
    private localStorageService :LocalStorageService,
    private location : Location,
    private toastService:ToastService,
    private updateFridgeItemService:UpdateFridgeItemService,
    private removeItemsService:RemoveItemsFridgeService
  ) {
  
  
 }
 iconLink:string = ""
 backgroundColor:string=""
 itemName:string =""
 isLoading:boolean = false
 payload:UpdateFridgeItemIn = {} as UpdateFridgeItemIn
 

  ngOnInit(): void {
    const item = this.localStorageService.getItem<GetFridgeItemsOut>("/fridge/item-edit")
    this.iconLink = item.iconLink
    this.backgroundColor =item.color
    this.itemName = item.name
    this.payload.itemId = item.itemId
    this.payload.expiration = new Date(item.expiration)
    this.payload.minimunQuantity = item.minimumQuantity
    this.payload.quantity =item.quantity
    console.info(item)
    
    this.createForm(this.payload)
    
 }
  private formBuilder = inject(FormBuilder)
  itemForm:FormGroup = {} as FormGroup
 
  createForm(p:UpdateFridgeItemIn){
    this.itemForm = this.formBuilder.group({
      expiration:[p.expiration,Validators.required],
      minimunQuantity:[p.minimunQuantity,Validators.min(0)],
      quantity:[p.quantity,Validators.min(0)],
      itemId:[p.itemId,Validators.required]
    })
 }


 handleDenyClick(){
  this.location.back()
 }

 handleConfirClick(){
  if(this.itemForm.valid){
    this.isLoading = true
    const payload = new UpdateFridgeItemIn(
      this.itemForm.get('expiration')?.value,
      this.itemForm.get('minimunQuantity')?.value,
      this.itemForm.get('quantity')?.value,
      this.itemForm.get('itemId')?.value,
    )

    const options : Observer<UpdateFridgeItemOut> = {
      next:()=>{
        this.toastService.showSucces("Alterações efetuadas com sucesso!")
        
      },
      error:()=>{
        this.toastService.showError("Ocorreu um erro ao salvar as alterações")
        this.isLoading = false
        this.location.back()
      },
      complete:()=>{
        this.isLoading = false
        this.localStorageService.removeItem("/fridge/item-edit")
        this.location.back()
      }
    }
    this.updateFridgeItemService.UpdateFridgeItem(payload).subscribe(options)

  }else{
    this.toastService.showWarn("Existem campos que precisam de atenção?")
  }
 }

 handleDangerClick(){
  this.removeItemsFridge()
 }

 isRemoveLoading : boolean = false

 removeItemsFridge(){
  this.isRemoveLoading = true
  const payload = new RemoveItemsFridgeIn([this.payload.itemId])

  const options : Observer<RemoveItemsFridgeOut> = {
    next:(res)=>{
      if(res.success){
        this.toastService.showSucces("Item removido da geladeira com sucesso!")
        this.isRemoveLoading = false
      }else{
        this.toastService.showError("Não foi possível remover o item da geladeira")
        this.isRemoveLoading = false  
      }
    },
    error:()=>{
      this.toastService.showError("Não foi possível remover o item da geladeira")
      this.isRemoveLoading = false
    },
    complete:()=>{
      this.location.back()
    }

  }

  this.removeItemsService.removeItemsFridge(payload).subscribe(options)
 }
}
