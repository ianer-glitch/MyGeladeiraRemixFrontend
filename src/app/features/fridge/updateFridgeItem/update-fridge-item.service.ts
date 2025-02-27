import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import UpdateFridgeItemIn from './UpdateFridgeItemIn';
import UpdateFridgeItemOut from './UpdateFridgeItemOut';

@Injectable({
  providedIn: 'root'
})
export class UpdateFridgeItemService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  public UpdateFridgeItem(payload:UpdateFridgeItemIn){
    return this.put<UpdateFridgeItemOut>("/fridge/items",payload)
  }
}
