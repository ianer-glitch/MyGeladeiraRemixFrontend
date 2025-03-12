import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import GetRecommendedItemsOut from './GetRecommendedItemsOut';

@Injectable({
  providedIn: 'root'
})
export class GetRecommendedItemsService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }


  getRecommendedItems(languageResponse : string){
    return this.get<GetRecommendedItemsOut[]>("/fridge/recommended-items/"+languageResponse)
  }
}
