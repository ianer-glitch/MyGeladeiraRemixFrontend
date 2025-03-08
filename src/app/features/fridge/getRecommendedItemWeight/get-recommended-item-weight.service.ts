import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import GetRecommendedItemWeightOut from './GetRecommendedItemWeightOut';

@Injectable({
  providedIn: 'root'
})
export class GetRecommendedItemWeightService extends FridgeService{

  constructor(http:HttpClient) {
    super(http);
  }


  public GetRecommendedItemWeight(name:string){
    return this.get<GetRecommendedItemWeightOut>("/Item/recommended/"+name)
  }
}
