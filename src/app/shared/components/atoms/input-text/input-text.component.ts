import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'input-text',
  imports: [InputTextModule,FormsModule],
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
  text:string = ""
  
  handleChange(newVal:string){
    this.text=newVal
    this.onChange(newVal)
  }
}
