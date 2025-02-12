import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-tem',
  imports: [CommonModule],
  templateUrl: './list-tem.component.html',
  styleUrl: './list-tem.component.css'
})
export class ListTemComponent {
  @Input() name:string = ""
  @Input() color:string = "#C4C4C4"
  @Input() imageLink:string = "https://picsum.photos/50"


}
