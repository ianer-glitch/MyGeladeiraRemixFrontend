import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import RemoveItemsFridgeIn from './RemoveItemsFridgeIn';
import RemoveItemsFridgeOut from './RemoveItemsFridgeOut';

@Injectable({
  providedIn: 'root'
})
export class RemoveItemsFridgeService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  public removeItemsFridge(payload : RemoveItemsFridgeIn){
    return this.delete<RemoveItemsFridgeOut>("/fridge/items",payload)
  }
}
