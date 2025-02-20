import { Routes } from '@angular/router';
import { HomeComponent } from './features/fridge/views/home/home.component';
import { FridgeLayoutComponent } from './features/fridge/layout/fridge-layout/fridge-layout.component';

export const routes: Routes = [
  {path:'fridge',
    component:FridgeLayoutComponent,
    loadChildren:()=>import("./features/fridge/fridge.routes").then(t=>t.fridgeRoutes)
  }
];
