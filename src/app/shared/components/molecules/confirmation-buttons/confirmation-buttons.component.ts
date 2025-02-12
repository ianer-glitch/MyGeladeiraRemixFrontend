import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'confirmation-buttons',
  imports: [ButtonComponent],
  templateUrl: './confirmation-buttons.component.html',
  styleUrl: './confirmation-buttons.component.css'
})
export class ConfirmationButtonsComponent {
  @Input() confirmLabel:string = ""
  @Input() denyLabel:string = ""
  @Output() confirmClick = new EventEmitter<MouseEvent>()
  @Output() denyClick = new EventEmitter<MouseEvent>()
  
}
