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
   
   
  constructor(private location: Location,
    private createItemService:CreateItemService, 
    private toastService:ToastService) {
    
    
  }

  private formBuilder = inject(FormBuilder)
  itemForm:FormGroup = {} as FormGroup
  payload: CreateItemIn = new CreateItemIn()
  
  ngOnInit(): void {
    this.createFormGroup(this.payload)
  }

  createFormGroup(p:CreateItemIn){
    this.itemForm = this.formBuilder.group({
      Icon:[p.Icon,Validators.required],
      Color:[p.Color,Validators.required],
      Expiration:[p.Expiration,Validators.required],
      Name:[p.Name,Validators.required],
      MinimumQuantity:[p.MinimumQuantity,Validators.min(1)],
      Quantity:[p.Quantity,Validators.min(1)],
    })
  }
  handleIconChange(e:File){
    this.icon = e
  }
  handleCancel(){
    this.location.back()
  }

  handleSubmit(){
    if(this.itemForm.valid && this.icon){
      this.isLoading =true
      const p =  new CreateItemIn(
        this.itemForm.get('Color')?.value,
        this.itemForm.get('Name')?.value,
        this.itemForm.get('MinimumQuantity')?.value,
        this.itemForm.get('Quantity')?.value,
        this.itemForm.get('Weight')?.value,
        this.itemForm.get('Expiration')?.value,
        this.itemForm.get('Icon')?.value,
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
