import { Component, Input } from '@angular/core';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { IconInfoComponent } from '../../molecules/icon-info/icon-info.component';
import { ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'input-select',
  imports: [SelectModule,IconInfoComponent,FormsModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css'
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
    throw new Error('Method not implemented.');
  }
  value:TKey | null = null
  
  handleChange(event :SelectChangeEvent){
    this.value=event.value
    this.onChange(event.value)
  }
  
  
}
