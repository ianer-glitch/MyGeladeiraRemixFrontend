import { Component } from '@angular/core';
import { InputTextComponent } from "../../../../../shared/components/organisms/input-text/input-text.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { Location } from "@angular/common"

@Component({
  selector: 'define-email-form',
  imports: [InputTextComponent, ConfirmationButtonsComponent],
  templateUrl: './define-email-form.component.html',
  styleUrl: './define-email-form.component.css'
})
export class DefineEmailFormComponent {
 /**
  *
  */
 constructor(private location : Location) {
  
  
 }
 
 
 handleConfirmClick(){

 }

 handleDenyClick(){
  this.location.back()
 }
}
