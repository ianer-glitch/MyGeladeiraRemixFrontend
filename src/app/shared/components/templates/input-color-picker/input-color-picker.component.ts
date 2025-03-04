import { Component, forwardRef, input, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextComponent } from "../../organisms/input-text/input-text.component";
import { ColorPickerModule } from 'primeng/colorpicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input-color-picker',
  imports: [ColorPickerModule,InputTextComponent,FormsModule,CommonModule],
  templateUrl: './input-color-picker.component.html',
  styleUrl: './input-color-picker.component.css',
  providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>InputColorPickerComponent),
        multi:true
      }
    ]
})
export class InputColorPickerComponent implements ControlValueAccessor {
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}
  value : string = ""

  label = input<string>("")
    
  writeValue(obj: any): void {
    this.value=obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }
  
  handleChange(newVal:string){
    this.value = newVal
    this.onChange(newVal)
  }
  


 

}
