import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CreatePasswordComponent } from './views/create-password/create-password.component';
import { DefineEmailComponent } from './views/define-email/define-email.component';

export const userRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'define-email',component:DefineEmailComponent},
  {path:'create-password',component:CreatePasswordComponent},
]
