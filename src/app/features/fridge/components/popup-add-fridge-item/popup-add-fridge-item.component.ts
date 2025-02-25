import { Component, EventEmitter, forwardRef, OnInit, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from "../../../../shared/components/organisms/input-select/input-select.component";
import { ConfirmationPopupComponent } from "../../../../shared/components/organisms/confirmation-popup/confirmation-popup.component";
import { GetItemsService } from '../../getItems/get-items.service';
import GetItemsOut from '../../getItems/GetItemsOut';

@Component({
  selector: 'popup-add-fridge-item',
  imports: [ FormsModule,
     CommonModule,
     InputSelectComponent,
     ConfirmationPopupComponent],
  templateUrl: './popup-add-fridge-item.component.html',
  styleUrl: './popup-add-fridge-item.component.css',
   providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>PopupAddFridgeItemComponent),
        multi:true
      }
    ]
})
export class PopupAddFridgeItemComponent implements ControlValueAccessor,OnInit {
  
  /**
   *
   */
  constructor(private getItemsService:GetItemsService) {
    
  }
  ngOnInit(): void {
    this.getItems()
  }
  
  visible:boolean = false
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}
  close = output<boolean>()
  writeValue(obj: any): void {
    this.visible = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  handleChange(newVal : boolean){
    this.visible  = newVal
    this.onChange(newVal)
  }

  items: GetItemsOut[] = []
  getItems(){
    this.getItemsService.getItems().subscribe((res)=> this.items)
  }
  
}
