import { Component } from '@angular/core';
import { DefineEmailFormComponent } from "../../components/define-email-form/define-email-form.component";
import { StepBarLoginComponent } from "../../components/step-bar-login/step-bar-login.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-define-email',
  imports: [DefineEmailFormComponent, StepBarLoginComponent,TranslocoDirective],
  templateUrl: './define-email.component.html',
  styleUrl: './define-email.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class DefineEmailComponent {
 translocoPath="identity.user.define-email"
}
