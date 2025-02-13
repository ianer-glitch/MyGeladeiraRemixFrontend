import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { IconInfoComponent } from '../../molecules/icon-info/icon-info.component';

@Component({
  selector: 'input-text',
  imports: [InputTextModule, FormsModule, IconInfoComponent,CommonModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputTextComponent),
      multi:true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor {
  
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}

  writeValue(obj: any): void {
    this.text=obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  
  @Input() id:string = ""
  @Input() label:string = ""
  @Input() fluid:boolean = false
  @Input() placeholder:string = ""
  @Input() information:string = ""
  @Input() informationPosition:string="right"
  text:string = ""
  
  handleChange(newVal:string){
    this.text=newVal
    this.onChange(newVal)
  }
}
