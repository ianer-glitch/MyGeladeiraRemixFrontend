import { Component, Input } from '@angular/core';

@Component({
  selector: 'prime-icon',
  imports: [],
  templateUrl: './prime-icon.component.html',
  styleUrl: './prime-icon.component.css'
})
export class PrimeIconComponent {
@Input() name:string = ""
}
