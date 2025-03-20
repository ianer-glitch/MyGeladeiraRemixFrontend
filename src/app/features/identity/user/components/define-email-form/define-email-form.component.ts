import { Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from "../../../../../shared/components/organisms/input-text/input-text.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { CommonModule, Location } from "@angular/common"
import { Router } from '@angular/router';
import { InputNumberComponent } from "../../../../../shared/components/organisms/input-number/input-number.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import PCreateUserIn from '../../createUser/PCreateUserIn';
import { LocalStorageService } from '../../../../../core/services/local-storage/local-storage.service';
import { ToastService } from '../../../../../core/services/toast/toast.service';
import { DatePickerModule } from 'primeng/datepicker';
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'define-email-form',
  imports: [
    InputTextComponent,
    DatePickerModule,
    ConfirmationButtonsComponent,
    InputNumberComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoDirective],
  templateUrl: './define-email-form.component.html',
  styleUrl: './define-email-form.component.css',
  providers:[
      provideTranslocoScope({
        scope: "",
        alias: "mf",
      }),
    ]
})
export class DefineEmailFormComponent implements OnInit {

 constructor(
    private location : Location,
    private router:Router,
    private localStorageService:LocalStorageService,
    private toastService:ToastService,
    private translocoService:TranslocoService
  ) {
  
 }
  ngOnInit(): void {
    const initial = new PCreateUserIn(
      "","","","",""
    )
    
    this.createForm(initial)
  }

 formBuilder = inject(FormBuilder)
 userForm : FormGroup = {} as FormGroup
 
 createForm(p:PCreateUserIn){
  this.userForm = this.formBuilder.group({
    firstName:[p.firstName,Validators.required],
    lastName:[p.lastName,Validators.required],
    email:[p.email,Validators.email],
    birthDate:[p.birthDate,Validators.required]
  })
 }
 
 translocoPath="identity.user.define-email.define-email-form"
 handleConfirmClick(){
  if(this.userForm.valid){
    this.router.navigate(['/auth/create-password'])
    const payload = new PCreateUserIn(
      this.userForm.get('firstName')?.value,
      this.userForm.get('lastName')?.value,
      this.userForm.get('birthDate')?.value,
      this.userForm.get('email')?.value,
      ""
    )

    this.localStorageService.setItem('createUser',payload)
    this.router.navigate(['/auth/create-password'])
    
  }else{
    const message = this.translocoService.translate(this.translocoPath+".confirm-click-warn")
    this.toastService.showWarn(message)
  }
  
  
 }

 handleDenyClick(){
  this.router.navigate(['/auth/login'])
 }
}
