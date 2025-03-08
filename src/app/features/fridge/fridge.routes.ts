import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminCreateEditItemComponent } from './views/admin-create-edit-item/admin-create-edit-item.component';
import { EditItemComponent } from './views/edit-item/edit-item.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { inject } from '@angular/core';
import AdminGuard from '../../core/guards/admin/AdminGuard';
import { RecipesComponent } from './views/recipes/recipes.component';


export const fridgeRoutes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'item-edit',component:EditItemComponent},
    {path:'recipes',component:RecipesComponent},
    {path:'shopping-list',component:ShoppingListComponent},
    {
        path:'admin',
        component:AdminHomeComponent,
        canActivate:[()=>inject(AdminGuard).canActivate()]
    },
    {
        path:'item-create-edit',
        component:AdminCreateEditItemComponent,
        canActivate:[()=>inject(AdminGuard).canActivate()]
    },
    
];
