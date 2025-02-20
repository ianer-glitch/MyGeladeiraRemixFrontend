import { Component } from '@angular/core';
import { ChipComponent } from "../../../../shared/components/atoms/chip/chip.component";
import { PrimeIconComponent } from "../../../../shared/components/atoms/prime-icon/prime-icon.component";
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'expiration-time-selector',
  imports: [ChipComponent, PrimeIconComponent],
  templateUrl: './expiration-time-selector.component.html',
  styleUrl: './expiration-time-selector.component.css'
})
export class ExpirationTimeSelectorComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
