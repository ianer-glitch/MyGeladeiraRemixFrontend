import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import AdminGuard from '../../../../core/guards/admin/AdminGuard';

@Component({
  selector: 'sidebar',
  imports: [DrawerModule, CommonModule, PrimeIconComponent],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>SidebarComponent),
        multi:true
      }
    ]
})
export class SidebarComponent implements ControlValueAccessor,OnInit {
  visible:boolean = true
  canAccessAdmin : boolean = false
  
  constructor(private router : Router,
    private localStorageService:LocalStorageService,
    private toastService:ToastService,
    private adminGuard:AdminGuard
  ) {
  }
  ngOnInit(): void {
    this.canAccessAdmin = !!this.adminGuard.canActivate().valueOf()
  }

  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}

  writeValue(obj: any): void {
    this.visible=obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }


  handleRedirect(route:string){
    this.router.navigate([route])
    this.handleChange(false)
  }

  isActive(route:string){
    return route == this.router.url
  }

  handleExit(){
    this.localStorageService.clear()
    this.router.navigate(["/auth/login"])
    this.toastService.showSucces("Você saiu!")
  }

  handleChange(newVal:boolean){
    this.visible = newVal
    this.onChange(newVal)
  }
}
