import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'chip',
  imports: [ChipModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export class ChipComponent {
 @Input() label:string = "";
 @Input() primeIcon:string = ""
 @Input() removable:boolean =false
 @Output() onRemove = new  EventEmitter<MouseEvent>()

 handleRemove(e:MouseEvent){
  this.onRemove.emit(e)
 }
}
