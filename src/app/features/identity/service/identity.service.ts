import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/services/base/base.service';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdentityService extends BaseService {

  constructor(http: HttpClient) {
    super(http, environment.identityUrl);  // Pass the injected baseUrl to the parent constructor
  }


}
