import { Injectable } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';
import UpdateItemIn from './UpdateItemIn';

@Injectable({
  providedIn: 'root'
})
export class UpdateItemService extends FridgeService {

  constructor(http:HttpClient) {
    super(http);
  }

  public updateItem(item : UpdateItemIn,icon:File){

    console.info(item)
    const formData = new FormData();
    formData.append('ItemId', item.itemId);
    formData.append('Color', item.color);
    formData.append('Name', item.name);
    formData.append('MinimumQuantity', item.minimumQuantity.toString());
    formData.append('Quantity', item.quantity.toString());
    
    formData.append('Weight', item.weight.toString());
    
    
    formData.append('Expiration', item.expiration.toISOString());
  
    if(icon && Object.keys(icon).length > 0 )
      formData.append('Icon', icon, icon.name);

    return this.put('/Item',formData)
  }
}
