import { Component } from '@angular/core';
import { InputTextComponent } from "../../../../shared/components/organisms/input-text/input-text.component";
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { StaticImageComponent } from "../../../../shared/components/atoms/static-image/static-image.component";

@Component({
  selector: 'app-login',
  imports: [InputTextComponent, ConfirmationButtonsComponent, StaticImageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
