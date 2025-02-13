import { Component, forwardRef, Input } from '@angular/core';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { IconInfoComponent } from '../../molecules/icon-info/icon-info.component';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input-select',
  imports: [SelectModule,IconInfoComponent,FormsModule,CommonModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputSelectComponent),
      multi:true
    }
  ]
})
export class InputSelectComponent<TKey>  implements ControlValueAccessor{
  @Input() id:string = ""
  @Input() label:string = ""
  @Input() fluid:boolean = false
  @Input() placeholder:string = ""
  @Input() information:string = ""
  @Input() informationPosition:string="right"
  @Input() optionLabel:string = ""
  @Input() optionValue:string = ""
  @Input() loading:boolean = false
  @Input() filterBy:string = ""
  @Input() options:any[] = []
  @Input() filter:boolean = false
  
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
  value:TKey | null = null
  
  handleChange(event :SelectChangeEvent){
    this.value=event.value
    this.onChange(event.value)
  }
  
  
}
