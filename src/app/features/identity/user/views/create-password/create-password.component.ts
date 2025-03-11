import { Component, Input } from '@angular/core';
import { CreatePasswordFormComponent } from "../../components/create-password-form/create-password-form.component";
import { StepBarLoginComponent } from "../../components/step-bar-login/step-bar-login.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-create-password',
  imports: [CreatePasswordFormComponent, StepBarLoginComponent,TranslocoDirective],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class CreatePasswordComponent {
 translocoPath="identity.user.create-password"
}
