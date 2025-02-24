import { Component, Input } from '@angular/core';
import { CreatePasswordFormComponent } from "../../components/create-password-form/create-password-form.component";
import { StepBarLoginComponent } from "../../components/step-bar-login/step-bar-login.component";

@Component({
  selector: 'app-create-password',
  imports: [CreatePasswordFormComponent, StepBarLoginComponent],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.css'
})
export class CreatePasswordComponent {

}
