import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'popup',
  imports: [DialogModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  encapsulation:ViewEncapsulation.None,
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>PopupComponent),
      multi:true
    }
  ]
})
export class PopupComponent implements ControlValueAccessor {
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
