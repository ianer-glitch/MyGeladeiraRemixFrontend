import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputNumberComponent } from "../../organisms/input-number/input-number.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../atoms/button/button.component";
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";

@Component({
  selector: 'app-input-number-buttons',
  imports: [InputNumberComponent, FormsModule, CommonModule, ButtonComponent, PrimeIconComponent],
  templateUrl: './input-number-buttons.component.html',
  styleUrl: './input-number-buttons.component.css',
  encapsulation:ViewEncapsulation.None,
  providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>InputNumberButtonsComponent),
        multi:true
      }
    ]
})
export class InputNumberButtonsComponent implements ControlValueAccessor {
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

  handleAdd(){
    if(this.value < this.max)
      this.value++
  }

  handleSub(){
    if(this.value > this.min)
      this.value--
  }
}
