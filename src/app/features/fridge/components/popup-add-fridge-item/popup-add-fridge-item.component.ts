import { Component, EventEmitter, forwardRef, OnInit, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from "../../../../shared/components/organisms/input-select/input-select.component";
import { ConfirmationPopupComponent } from "../../../../shared/components/organisms/confirmation-popup/confirmation-popup.component";
import { GetItemsService } from '../../getItems/get-items.service';
import GetItemsOut from '../../getItems/GetItemsOut';
import { ChipComponent } from "../../../../shared/components/atoms/chip/chip.component";
import { AddItemsToFridgeService } from '../../addItemsToFridge/add-items-to-fridge.service';
import AddItemsToFridgeIn from '../../addItemsToFridge/AddItemsToFridgeIn';
import AddItemsToFridgeOut from '../../addItemsToFridge/AddItemsToFridgeOut';
import { Observable, Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';

@Component({
  selector: 'popup-add-fridge-item',
  imports: [FormsModule,
    CommonModule,
    InputSelectComponent,
    ConfirmationPopupComponent, ChipComponent],
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
  
  constructor(
      private addItemsToFridgeService:AddItemsToFridgeService,
      private toastService:ToastService,
      private getItemsService:GetItemsService) {
    
  }
  ngOnInit(): void {
    this.getItems()
  }
  isLoading:boolean = false
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
  selectedItems: GetItemsOut[] = []
  getItems(){
    this.getItemsService.getItems().subscribe((res)=> this.items = res)
  }

  handleItemRemove(item:GetItemsOut){
    this.selectedItems =this.selectedItems.filter(f=>f.id != item.id)
  }


  addItemsToFridge(){
    if(this.selectedItems.length > 0){
      this.isLoading=true
      const payload = new AddItemsToFridgeIn(this.selectedItems.map(m=>m.id))
      
      const options : Observer<AddItemsToFridgeOut> = {
        next:()=>{
            this.toastService.showSucces("Items adicionados com sucesso!")
            this.isLoading=false
            this.close.emit(true)
            
        },
        error:()=>{
          this.toastService.showError("Ocorreu um erro ao adicionar os items")
          this.isLoading=false
        },
        complete:()=> {
          this.isLoading=false
          this.close.emit(true)
        }
      }
  
      this.addItemsToFridgeService.addItemsToFridge(payload).subscribe(options)

    }else{
      this.toastService.showWarn("É necessário selecionar pelo menos um item para adicionar!")
    }
  }
  
}
