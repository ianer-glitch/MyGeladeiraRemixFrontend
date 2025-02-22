import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PIsUserPasswordValidIn from './PIsUserPasswordValidIn';
import { environment } from '../../../../../environments/environment.development';
import { IdentityService } from '../../service/identity.service';
import LoginOut from './LoginOut';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends IdentityService {

  constructor(http:HttpClient) {
    super(http);
  }

  public Login( request: PIsUserPasswordValidIn){
    return this.post<LoginOut>('/User/Login',request)
  }
}
