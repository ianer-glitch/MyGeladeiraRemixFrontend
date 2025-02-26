import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminCreateEditItemComponent } from './views/admin-create-edit-item/admin-create-edit-item.component';
import { EditItemComponent } from './views/edit-item/edit-item.component';


export const fridgeRoutes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminHomeComponent},
    {path:'item-create-edit',component:AdminCreateEditItemComponent},
    {path:'item-edit',component:EditItemComponent}
];
