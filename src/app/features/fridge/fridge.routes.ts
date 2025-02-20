import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';


export const fridgeRoutes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminHomeComponent}
];
