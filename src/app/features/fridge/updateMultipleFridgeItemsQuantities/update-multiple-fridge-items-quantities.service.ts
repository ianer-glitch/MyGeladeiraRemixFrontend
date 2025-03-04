import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import UpdateMultipleFridgeItemsQuantitiesIn from './UpdateMultipleFridgeItemsQuantitiesIn';
import UpdateMultipleFridgeItemsQuantitiesOut from './UpdateMultipleFridgeItemsQuantitiesOut';

@Injectable({
  providedIn: 'root'
})
export class UpdateMultipleFridgeItemsQuantitiesService extends FridgeService {

  constructor(http: HttpClient) {
    super(http);
  }

  public updateMultipleFridgeItemsQuantities(payload: UpdateMultipleFridgeItemsQuantitiesIn[]){
    return this.patch<UpdateMultipleFridgeItemsQuantitiesOut>("/fridge/items",payload)
  }
}
