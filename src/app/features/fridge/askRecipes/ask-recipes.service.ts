import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import AskRecipesOut from './AskRecipesOut';

@Injectable({
  providedIn: 'root'
})
export class AskRecipesService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  askRecipes(){
    return this.get<AskRecipesOut[]>('/recipes')
  }
}
