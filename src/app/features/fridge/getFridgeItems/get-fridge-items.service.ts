import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import GetItemsOut from '../getItems/GetItemsOut';
import GetFridgeItemsOut from './GetFridgeItemsOut';

@Injectable({
  providedIn: 'root'
})
export class GetFridgeItemsService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  getFridgeItems(){
    return this.get<GetFridgeItemsOut[]>("/fridge/items")
  }
}
