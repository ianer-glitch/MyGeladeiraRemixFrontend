import { Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from "../../../../shared/components/organisms/input-text/input-text.component";
import { InputNumberComponent } from "../../../../shared/components/organisms/input-number/input-number.component";
import { InputNumberButtonsComponent } from "../../../../shared/components/templates/input-number-buttons/input-number-buttons.component";
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { ExpirationTimeSelectorComponent } from "../expiration-time-selector/expiration-time-selector.component";
import { ImgUploadItemComponent } from "../img-upload-item/img-upload-item.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import CreateItemIn from '../../createItem/CreateItemIn';
import { CreateItemService } from '../../createItem/create-item.service';
import { Location } from '@angular/common';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { Observer } from 'rxjs';
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import GetItemsOut from '../../getItems/GetItemsOut';
import {urlToFile} from '../../../../shared/tools'
import UpdateItemIn from '../../updateItem/UpdateItemIn';
import { UpdateItemService } from '../../updateItem/update-item.service';


@Component({
  selector: 'admin-create-edit-item-form',
  imports: [InputTextComponent,
            InputNumberComponent,
            InputNumberButtonsComponent,
            ConfirmationButtonsComponent,
            ExpirationTimeSelectorComponent, 
            ImgUploadItemComponent,ReactiveFormsModule],
  templateUrl: './admin-create-edit-item-form.component.html',
  styleUrl: './admin-create-edit-item-form.component.css'
})
export class AdminCreateEditItemFormComponent implements OnInit {
  
  icon:File = {} as any
  isLoading:boolean = false
  isEditing:boolean = false
   
  constructor(private location: Location,
    private createItemService:CreateItemService, 
    private toastService:ToastService,
    private localStorageService:LocalStorageService,
    private updateItemService:UpdateItemService
  ) {
    
    
  }

  private formBuilder = inject(FormBuilder)
  itemForm:FormGroup = {} as FormGroup
  payload: CreateItemIn = new CreateItemIn()
  
  ngOnInit(): void {
    this.createFormGroup(this.payload)
    this.handleFormEditing()
   

  }
  iconLink:string=""
  editingItemId:string = '"'
  handleFormEditing(){
    const editingItem = this.localStorageService.getItem<GetItemsOut>('/fridge/item')
    
    if(Object.keys(editingItem).length > 0){
      this.editingItemId = editingItem.id
      console.info(this.editingItemId)
      this.iconLink = editingItem.icon
      this.isEditing = true
      const formModel = new CreateItemIn()
      formModel.color = editingItem.color
      formModel.expiration  = new Date(editingItem.expiration)
      formModel.minimumQuantity = editingItem.minimumQuantity
      formModel.name = editingItem.name
      formModel.quantity=editingItem.quantity
      formModel.weight = 1
      this.createFormGroup(formModel)
    }
  }

  

  createFormGroup(p:CreateItemIn){
    this.itemForm = this.formBuilder.group({
      icon:[p.icon,Validators.required],
      color:[p.color,Validators.required],
      expiration:[p.expiration,Validators.required],
      name:[p.name,Validators.required],
      minimumQuantity:[p.minimumQuantity,Validators.min(1)],
      quantity:[p.quantity,Validators.min(1)],
    })
  }
  handleIconChange(e:File){
    this.icon = e
  }
  handleCancel(){
    this.location.back()
  }



  handleSubmit(){
    if(this.isEditing){
      this.updateItem()
    }else{
      this.createItem()

    }
  }

  updateItem(){
    if(this.itemForm.valid && this.icon){
      this.isLoading =true
      const p =  new UpdateItemIn(this.editingItemId,
        this.itemForm.get('color')?.value,
        this.itemForm.get('name')?.value,
        this.itemForm.get('minimumQuantity')?.value,
        this.itemForm.get('quantity')?.value,
        this.itemForm.get('weight')?.value,
        this.itemForm.get('expiration')?.value,
        this.itemForm.get('icon')?.value,
      )

      const handleRequest:Observer<any> = {
        next:(res) => this.toastService.showSucces("Item adicionado com sucesso!"),
        error:(err) => {
            this.toastService.showError("Algo deu errado")
            this.isLoading = false
          },
        complete:()=> {
            this.location.back()
            this.isLoading = false
          }
      }
  
      this.updateItemService.updateItem(p,this.icon).subscribe(handleRequest)
    }else{
      this.toastService.showWarn("Existem campos incorretos!")
    }
  }

  createItem(){
    if(this.itemForm.valid && this.icon){
      this.isLoading =true
      const p =  new CreateItemIn(
        this.itemForm.get('color')?.value,
        this.itemForm.get('name')?.value,
        this.itemForm.get('minimumQuantity')?.value,
        this.itemForm.get('quantity')?.value,
        this.itemForm.get('weight')?.value,
        this.itemForm.get('expiration')?.value,
        this.itemForm.get('icon')?.value,
      )

      const handleRequest:Observer<any> = {
        next:(res) => this.toastService.showSucces("Item adicionado com sucesso!"),
        error:(err) => {
            this.toastService.showError("Algo deu errado")
            this.isLoading = false
          },
        complete:()=> {
            this.location.back()
            this.isLoading = false
          }
      }
  
      this.createItemService.createItem(p,this.icon).subscribe(handleRequest)
    }else{
      this.toastService.showWarn("Existem campos incorretos!")
    }

  }

   

}
