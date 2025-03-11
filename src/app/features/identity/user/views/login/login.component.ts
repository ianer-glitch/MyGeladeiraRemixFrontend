import { Component } from '@angular/core';
import { StaticImageComponent } from "../../../../../shared/components/atoms/static-image/static-image.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";


@Component({
  selector: 'app-login',
  imports: [ StaticImageComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
 
})
export class LoginComponent {

}
