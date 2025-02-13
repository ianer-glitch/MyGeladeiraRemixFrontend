import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { PrimeIconComponent } from "../prime-icon/prime-icon.component";

@Component({
  selector: 'list-tem',
  imports: [CommonModule, PrimeIconComponent],
  templateUrl: './list-tem.component.html',
  styleUrl: './list-tem.component.css'
})
export class ListTemComponent {
  @Input() name:string = ""
  @Input() color:string = "#C4C4C4"
  @Input() imageLink:string = ""
  @Input() primeIcon:string = ""


}
