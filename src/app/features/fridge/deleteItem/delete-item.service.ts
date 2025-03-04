import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import DeleteItemIn from './DeleteItemIn';
import DeleteItemOut from './DeleteItemOut';

@Injectable({
  providedIn: 'root'
})
export class DeleteItemService extends FridgeService{

  constructor(http:HttpClient) {
    super(http);
  }

  public deleteItems(payload : DeleteItemIn){
    return this.delete<DeleteItemOut>("/Item",payload)
  }
}
