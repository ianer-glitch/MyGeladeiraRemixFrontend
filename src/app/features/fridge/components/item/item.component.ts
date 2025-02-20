import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() quantity:number = 0
  @Input() iconLink:string = ""
  @Input() expirationPercentage : string = "0"
  @Input() itemId : string = ""
  @Input() iconName:string = ""
  @Input() backgroundColor:string = "tomato"

}
