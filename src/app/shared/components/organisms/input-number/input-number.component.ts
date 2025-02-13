import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconInfoComponent } from "../../molecules/icon-info/icon-info.component";
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'input-number',
  imports: [CommonModule, FormsModule, IconInfoComponent,InputNumberModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputNumberComponent),
      multi:true
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() id:string = ""
  @Input() label:string = ""
  @Input() fluid:boolean = false
  @Input() placeholder:string = ""
  @Input() information:string = ""
  @Input() informationPosition:string="right"
  @Input() min:number = 0
  @Input() max:number = 999999
  
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  value:number = 0
  
  handleChange(newVal : number){
    this.value=newVal
    this.onChange(newVal)
  }
}
