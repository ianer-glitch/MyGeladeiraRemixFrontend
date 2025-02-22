import { Component } from '@angular/core';
import { InputPasswordComponent } from "../../../../../shared/components/organisms/input-password/input-password.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { Location } from '@angular/common';

@Component({
  selector: 'create-password-form',
  imports: [InputPasswordComponent, ConfirmationButtonsComponent],
  templateUrl: './create-password-form.component.html',
  styleUrl: './create-password-form.component.css'
})
export class CreatePasswordFormComponent {

  /**
   *
   */
  constructor(private location:Location) {
    
    
  }

  

  handleDeny(){
    this.location.back()
  }
}
