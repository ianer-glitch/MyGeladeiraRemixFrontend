import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CreatePasswordComponent } from './views/create-password/create-password.component';

export const userRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'create-password',component:CreatePasswordComponent}
]
