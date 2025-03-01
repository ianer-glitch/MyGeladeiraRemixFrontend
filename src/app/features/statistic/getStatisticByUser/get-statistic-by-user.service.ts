import { Injectable } from '@angular/core';
import { StatisticService } from '../service/statistic-service.service';
import { HttpClient } from '@angular/common/http';
import GetStatisticByUserOut from './GetStatisticByUserOut';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticByUserService extends StatisticService {

  constructor(http:HttpClient) {
    super(http);
  }

  public getStatisticByUser(){
    return this.get<GetStatisticByUserOut>("/statistic/user")
  }
}
