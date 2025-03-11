import { Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from "../../../../../shared/components/organisms/input-text/input-text.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { LoginService } from '../../login/login.service';
import PIsUserPasswordValidIn from '../../login/PIsUserPasswordValidIn';
import { ReactiveFormsModule,FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { InputPasswordComponent } from "../../../../../shared/components/organisms/input-password/input-password.component";
import { ToastService } from '../../../../../core/services/toast/toast.service';
import { Router } from '@angular/router';
import LoginOut from '../../login/LoginOut';
import { Observable, Observer } from 'rxjs';
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'login-form',
  imports: [InputTextComponent,
            ConfirmationButtonsComponent,
            ReactiveFormsModule,
            InputPasswordComponent,TranslocoDirective],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class LoginFormComponent implements OnInit  {

  constructor( 
    private loginService : LoginService,
    private toastService : ToastService,
    private router: Router,
    private translocoService : TranslocoService
    ) {
 
  
  }
  isLoading:boolean = false 
  loginForm : FormGroup = new FormGroup({})
  payload : PIsUserPasswordValidIn = new PIsUserPasswordValidIn()
  translocoPath = "identity.user.login.login-form."
  
  ngOnInit(): void {
    this.createFormGroup(this.payload)
    
  }

  private  formBuilder = inject(FormBuilder)
  createFormGroup(model:PIsUserPasswordValidIn){
    

    this.loginForm = this.formBuilder.group({
      Email:[model.Email,Validators.email],
      Password:[model.Password,Validators.required]
    })
  }

  handleDeny(){
    
    this.router.navigate(['/auth/define-email'])
  }

  login(){
    if(this.loginForm.valid){
      this.isLoading= true
      const request = new PIsUserPasswordValidIn()
      request.Email= this.loginForm.get("Email")?.value
      request.Password = this.loginForm.get("Password")?.value
      
      const observer : Observer<LoginOut> = {
        
        next:(res)=>{
          localStorage.setItem('token',res.token)
          this.isLoading = false
          this.router.navigate(['/fridge/home']) 
        },
        error:()=>{
          const message = this.translocoService.translate(this.translocoPath+'login-error-message')
          this.toastService.showError(message)
          this.isLoading = false
        },
        complete:()=>this.isLoading = false
      }
      
      this.loginService.Login(request).subscribe(observer)


    }else{
      this.toastService.showWarn('Existem dados incorretos')
    }
  }
}

