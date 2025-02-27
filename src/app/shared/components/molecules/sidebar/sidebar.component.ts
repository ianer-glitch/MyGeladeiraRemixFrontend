import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import { ToastService } from '../../../../core/services/toast/toast.service';

@Component({
  selector: 'sidebar',
  imports: [DrawerModule, CommonModule, PrimeIconComponent],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  visible:boolean = true
  
  constructor(private router : Router,
    private localStorageService:LocalStorageService,
    private toastService:ToastService,
  ) {
  }


  handleRedirect(route:string){
    this.router.navigate([route])
  }

  isActive(route:string){
    return route == this.router.url
  }

  handleExit(){
    this.localStorageService.clear()
    this.router.navigate(["/auth/login"])
    this.toastService.showSucces("Você saiu!")
  }
}
