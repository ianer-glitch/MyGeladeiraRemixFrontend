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
  
  
   
   
  constructor(private location: Location,
    private createItemService:CreateItemService) {
    
    
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

  handleCancel(){
    this.location.back()
  }

  handleSubmit(){
    console.info(this.itemForm.valid)
    console.info(this.itemForm.value)
    // this.createItemService.createItem(this.payload)
  }



}
