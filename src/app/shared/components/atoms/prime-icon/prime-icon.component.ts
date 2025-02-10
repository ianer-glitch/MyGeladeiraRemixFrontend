import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prime-icon',
  imports: [CommonModule],
  templateUrl: './prime-icon.component.html',
  styleUrl: './prime-icon.component.css'
})
export class PrimeIconComponent {
@Input() name:string = ""
@Input() size:string = "1.8rem"
}
