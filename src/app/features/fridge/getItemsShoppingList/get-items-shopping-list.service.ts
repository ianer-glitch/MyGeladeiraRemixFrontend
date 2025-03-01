import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import GetItemsShoppingListOut from './GetItemsShoppingListOut';

@Injectable({
  providedIn: 'root'
})
export class GetItemsShoppingListService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }


  public getItemsShoppingList(){
    return this.get<GetItemsShoppingListOut[]>('/shoppinglist')
  }
}
