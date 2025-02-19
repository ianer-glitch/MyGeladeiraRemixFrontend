import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';

import { PasswordModule } from 'primeng/password';
import { IconInfoComponent } from "../../molecules/icon-info/icon-info.component";
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'input-password',
  imports: [IconInfoComponent,PasswordModule,FormsModule,CommonModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css',
  encapsulation:ViewEncapsulation.None,
   providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>InputPasswordComponent),
        multi:true
      }
    ]
})
export class InputPasswordComponent {
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
