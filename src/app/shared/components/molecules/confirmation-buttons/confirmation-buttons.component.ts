import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'confirmation-buttons',
  imports: [ButtonComponent],
  templateUrl: './confirmation-buttons.component.html',
  styleUrl: './confirmation-buttons.component.css'
})
export class ConfirmationButtonsComponent {
  confirmButtonType = input<string>("button")
  dennyButtonType = input<string>("button")
  @Input() isConfirmLoading:boolean = false
  @Input() isDenyLoading:boolean = false
  @Input() confirmLabel:string = ""
  @Input() denyLabel:string = ""
  @Output() confirmClick = new EventEmitter<MouseEvent>()
  @Output() denyClick = new EventEmitter<MouseEvent>()
  
}
