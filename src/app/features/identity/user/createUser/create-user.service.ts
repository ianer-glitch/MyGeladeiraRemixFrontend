import { Injectable } from '@angular/core';
import { IdentityService } from '../../service/identity.service';
import { HttpClient } from '@angular/common/http';
import PCreateUserIn from './PCreateUserIn';
import PCreateUserOut from './PCreateUserOut';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService extends IdentityService {

  constructor(http:HttpClient) {
    super(http);
  }

  public createUser(payload: PCreateUserIn){
    return this.post<PCreateUserOut>('/User',payload)
  }
}
