import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import AddItemsToFridgeOut from './AddItemsToFridgeOut';
import AddItemsToFridgeIn from './AddItemsToFridgeIn';

@Injectable({
  providedIn: 'root'
})
export class AddItemsToFridgeService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  public addItemsToFridge(payload: AddItemsToFridgeIn){
    return this.post<AddItemsToFridgeOut>('/fridge/items',payload)
  }

}
