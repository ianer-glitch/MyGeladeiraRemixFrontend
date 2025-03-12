import { Component, EventEmitter, forwardRef, OnInit, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
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
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'popup-add-fridge-item',
  imports: [FormsModule,ReactiveFormsModule,
    CommonModule,
    InputSelectComponent,
    ConfirmationPopupComponent, ChipComponent,TranslocoDirective],
  templateUrl: './popup-add-fridge-item.component.html',
  styleUrl: './popup-add-fridge-item.component.css',
   providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>PopupAddFridgeItemComponent),
        multi:true
      },
      provideTranslocoScope({
        scope: "",
        alias: "mf",
      }),
    ]
})
export class PopupAddFridgeItemComponent implements ControlValueAccessor,OnInit {
  
  constructor(
      private addItemsToFridgeService:AddItemsToFridgeService,
      private toastService:ToastService,
      private getItemsService:GetItemsService,
      private translocoService:TranslocoService
    ) {
    
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
  tempSelectedItem :  GetItemsOut | null = null
  getItems(){
    this.getItemsService.getItems().subscribe((res)=> this.items = res)
  }

  handleItemRemove(item:GetItemsOut){
    this.selectedItems =this.selectedItems.filter(f=>f.id != item.id)
  }
  translocoPath = "fridge.home.home-item-list.popup-add-fridge-item"
  addItemsToFridge(){
    if(this.selectedItems.length > 0){
      this.isLoading=true
      const payload = new AddItemsToFridgeIn(this.selectedItems.map(m=>m.id))
      
      const options : Observer<AddItemsToFridgeOut> = {
        next:(res)=>{
          if(res.success){
            this.translocoService.selectTranslate(this.translocoPath+".add-items-to-fridge-success").subscribe((res)=>{
              this.toastService.showSucces(res)
            })
            
            this.handleClose()

          }else{
            this.translocoService.selectTranslate(this.translocoPath+".add-items-to-fridge-error").subscribe((res)=>{
              this.toastService.showError(res)
            })

            this.isLoading=false
          }
            
        },
        error:()=>{
          this.translocoService.selectTranslate(this.translocoPath+".add-items-to-fridge-error").subscribe((res)=>{
            this.toastService.showError(res)
          })
          this.isLoading=false
        },
        complete:()=> {
         
          this.handleClose()
        }
      }
  
      this.addItemsToFridgeService.addItemsToFridge(payload).subscribe(options)

    }else{
      this.translocoService.selectTranslate(this.translocoPath+".add-items-to-fridge-warn").subscribe((res)=>{
        this.toastService.showWarn(res)
      })
    }
  }

  handleAddItemsToList(item?:GetItemsOut){
    if(item && Object.keys(item).length > 0){
      this.selectedItems.push(item)
    }
  }

  handleSelectClear(){
    this.selectedItems.pop()
  }

  handleClose(){
    this.isLoading=false
    this.close.emit(true)
    this.selectedItems = []
    this.tempSelectedItem = null
  }
  
}
