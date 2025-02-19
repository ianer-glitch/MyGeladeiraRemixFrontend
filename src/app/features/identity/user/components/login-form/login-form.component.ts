import { Component, inject, OnInit } from '@angular/core';
import { InputTextComponent } from "../../../../../shared/components/organisms/input-text/input-text.component";
import { ConfirmationButtonsComponent } from "../../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { LoginService } from '../../login/login.service';
import PIsUserPasswordValidIn from '../../login/PIsUserPasswordValidIn';
import { ReactiveFormsModule,FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { InputPasswordComponent } from "../../../../../shared/components/organisms/input-password/input-password.component";


@Component({
  selector: 'login-form',
  imports: [InputTextComponent, ConfirmationButtonsComponent, ReactiveFormsModule, InputPasswordComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit  {

  constructor( private loginService : LoginService) {
 
  
  }

  loginForm : FormGroup = new FormGroup({})
  payload : PIsUserPasswordValidIn = new PIsUserPasswordValidIn()
  
  ngOnInit(): void {
    this.createFormGroup(this.payload)
  }

  private  formBuilder = inject(FormBuilder)
  createFormGroup(model:PIsUserPasswordValidIn){
    

    this.loginForm = this.formBuilder.group({
      Email:[model.Email,Validators.required],
      Password:[model.Password,Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      const request = new PIsUserPasswordValidIn()
      request.Email= this.loginForm.get("Email")?.value
      request.Password = this.loginForm.get("Password")?.value
  
      this.loginService.Login(request).subscribe((res)=>{
        console.info(res)
      })

    }
  }
}
