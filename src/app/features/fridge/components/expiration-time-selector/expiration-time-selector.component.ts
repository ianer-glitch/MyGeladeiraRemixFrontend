import { Component, forwardRef, Input } from '@angular/core';
import { ChipComponent } from "../../../../shared/components/atoms/chip/chip.component";
import { PrimeIconComponent } from "../../../../shared/components/atoms/prime-icon/prime-icon.component";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { PopupComponent } from "../../../../shared/components/atoms/popup/popup.component";
import { ButtonComponent } from "../../../../shared/components/atoms/button/button.component";

@Component({
  selector: 'expiration-time-selector',
  imports: [
    ChipComponent,
    PrimeIconComponent,
    CommonModule,
    DatePickerModule,
    FormsModule,
    PopupComponent,
    ButtonComponent
],
  templateUrl: './expiration-time-selector.component.html',
  styleUrl: './expiration-time-selector.component.css',
  providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>ExpirationTimeSelectorComponent),
        multi:true
      }
    ]
})
export class ExpirationTimeSelectorComponent implements ControlValueAccessor {
  @Input() value : Date = new Date()
  showDatePicker:boolean = false
   
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  handleAddDate(days : number) : Date{
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);

    currentDate.setHours(0)
    currentDate.setMinutes(0)
    currentDate.setSeconds(0)
    currentDate.setMilliseconds(0)
    
    return currentDate
  }


  handleClick(days : number){
    
    this.value = this.handleAddDate(days)
    this.onChange(days)
  }

  isActive(days : number){
    return this.value.getTime() === this.handleAddDate(days).getTime()
  }

  getFormatedDate(date :Date) {
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1; 
    let year: number = date.getFullYear();

    
    day = day < 10 ? Number('0' + day) : day;
    month = month < 10 ? Number('0' + month) : month;

    return `${day}/${month}/${year}`;
}

}
