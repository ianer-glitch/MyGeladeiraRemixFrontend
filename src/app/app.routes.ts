import { Routes } from '@angular/router';
import { HomeComponent } from './features/fridge/views/home/home.component';
import { FridgeLayoutComponent } from './features/fridge/layout/fridge-layout/fridge-layout.component';
import { LoginLayoutComponent } from './features/identity/user/layout/login-layout/login-layout.component';

export const routes: Routes = [
  {path:'fridge',
    component:FridgeLayoutComponent,
    loadChildren:()=>import("./features/fridge/fridge.routes").then(t=>t.fridgeRoutes)
  },
  {path:'auth',
    component:LoginLayoutComponent,
    loadChildren:()=>import("./features/identity/user/user.routes").then(t=>t.userRoutes)
  }
];
