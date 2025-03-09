import { Component } from '@angular/core';
import { StaticImageComponent } from "../../../../../shared/components/atoms/static-image/static-image.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { provideTranslocoScope, TranslocoModule,TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-login',
  imports: [ StaticImageComponent, LoginFormComponent,TranslocoModule,TranslocoDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ],
})
export class LoginComponent {

}
