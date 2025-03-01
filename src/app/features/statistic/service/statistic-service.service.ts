import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/services/base/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StatisticService extends BaseService{

  constructor(http:HttpClient) {
    super(http,environment.statisticUrl);
  }
}
