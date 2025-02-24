import { Component } from '@angular/core';
import { DefineEmailFormComponent } from "../../components/define-email-form/define-email-form.component";
import { StepBarLoginComponent } from "../../components/step-bar-login/step-bar-login.component";

@Component({
  selector: 'app-define-email',
  imports: [DefineEmailFormComponent, StepBarLoginComponent],
  templateUrl: './define-email.component.html',
  styleUrl: './define-email.component.css'
})
export class DefineEmailComponent {

}
