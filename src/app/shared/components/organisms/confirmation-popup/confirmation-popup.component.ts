import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { PopupComponent } from "../../atoms/popup/popup.component";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfirmationButtonsComponent } from "../../molecules/confirmation-buttons/confirmation-buttons.component";

@Component({
  selector: 'confirmation-popup',
  imports: [PopupComponent, FormsModule, ConfirmationButtonsComponent],
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ConfirmationPopupComponent),
      multi:true,
    }
  ]
})
export class ConfirmationPopupComponent implements ControlValueAccessor {
  @Input() confirmLabel:string = ""
  @Input() denyLabel:string = ""
  @Output() confirmClick = new EventEmitter<MouseEvent>()
  @Output() denyClick = new EventEmitter<MouseEvent>()
  
  @Input() visible:boolean = false
  onChange = (param:any)=>{}
  onTouch = ()=>{}
  
  writeValue(obj: any): void {
    this.visible = obj
      
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  handleChange(newVal:boolean){
    this.visible = newVal
    this.onChange(newVal)
  }

 @Input() title:string = ""


}
