import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import GetItemsOut from './GetItemsOut';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  public getItems(){
    return this.get<GetItemsOut[]>("/Item")
  }
}
