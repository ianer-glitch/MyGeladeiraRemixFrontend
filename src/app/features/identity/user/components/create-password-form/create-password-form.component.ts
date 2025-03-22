import { Component, inject, OnInit } from '@angular/core';
import { InputPasswordComponent } from "../../../../../shared/components/organisms/input-password/input-password.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { CommonModule, Location } from '@angular/common';
import PCreateUserIn from '../../createUser/PCreateUserIn';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../../../core/services/local-storage/local-storage.service';
import { ToastService } from '../../../../../core/services/toast/toast.service';
import { CreateUserService } from '../../createUser/create-user.service';
import PCreateUserOut from '../../createUser/PCreateUserOut';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'create-password-form',
  imports: [
    ReactiveFormsModule ,
    InputPasswordComponent,
    ConfirmationButtonsComponent,
    TranslocoDirective,CommonModule],
  templateUrl: './create-password-form.component.html',
  styleUrl: './create-password-form.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class CreatePasswordFormComponent implements OnInit{

  
  constructor(
    private router:Router,
    private location:Location,
    private localStorageService:LocalStorageService,
    private toastService:ToastService,
    private createUserService:CreateUserService,
    private translocoService:TranslocoService
  ) {
    
    
  }
  initial = new PCreateUserIn(
        "","","","",""
      )

  isLoading:boolean = false 
  ngOnInit(): void {
    this.initial = this.localStorageService.getItem<PCreateUserIn>('createUser')
    this.createForm(this.initial)
  
  }

  formBuilder = inject(FormBuilder)
   userForm : FormGroup = {} as FormGroup
   
   createForm(p:PCreateUserIn){
    this.userForm = this.formBuilder.group({
      password:[p.password,Validators.required],
      confirmPassword:["",Validators.required]
    })
   }
  

  handleDeny(){
    this.router.navigate(['auth/define-email'])
  }

  lentLessThen8 = false
  passNotContainsNumber = false
  passNotContainsUpper = false
  passNotContainsLower = false
  passNotContainSpecialChar = false

  isPasswordValid(password: string){
    this.lentLessThen8 = false
    this.passNotContainsUpper = false
    this.passNotContainsLower = false
    this.passNotContainSpecialChar  =false
    this.passNotContainsNumber = false
    

    if(password.length < 8)
      this.lentLessThen8 = true
    
    if (!/[A-Z]/.test(password))
      this.passNotContainsUpper = true

    if (!/[a-z]/.test(password))
      this.passNotContainsLower = true

    if (!/[\W_]/.test(password))
      this.passNotContainSpecialChar  =true

    if (!/[0-9]/.test(password))
      this.passNotContainsNumber  =true


    return  !this.lentLessThen8 
      && !this.passNotContainsUpper 
      && !this.passNotContainsLower 
      && !this.passNotContainSpecialChar 
      && !this.passNotContainsNumber
  }

   translocoPath="identity.user.create-password.create-password-form"
  handleConfirm(){
    if(this.userForm.valid){
      
      const password = this.userForm.get('password')?.value
      const confirmPassword = this.userForm.get('confirmPassword')?.value 
      
      
      
      if(this.isPasswordValid(password) && password === confirmPassword){
        this.isLoading = true
        this.initial.password = password
        

        const options : Observer<PCreateUserOut> ={
          next:()=>{
            const message = this.translocoService.translate(this.translocoPath+'.create-user-success')
            this.toastService.showSucces(message)
            this.router.navigate(['auth/login'])
          },
          error:()=>{
            const message = this.translocoService.translate(this.translocoPath+'.create-user-error')
            this.toastService.showError(message)
            this.isLoading = false
          },
          complete:()=>this.isLoading = false
        } 
        this.createUserService.createUser(this.initial).subscribe(options)
      }else{
        const message = this.translocoService.translate(this.translocoPath+'.create-user-warn')
        this.toastService.showWarn(message)
      }
    }else{
      const message = this.translocoService.translate(this.translocoPath+'.create-user-warn')
      this.toastService.showWarn(message)
    }
  }
}
