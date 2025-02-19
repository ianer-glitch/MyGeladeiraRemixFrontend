import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PIsUserPasswordValidIn from './PIsUserPasswordValidIn';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public Login( request: PIsUserPasswordValidIn){
    
    return this.http.post<string>(environment.identityUrl+'/login',request)
  }
}
