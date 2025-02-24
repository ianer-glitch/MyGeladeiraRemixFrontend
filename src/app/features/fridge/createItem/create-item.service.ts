import { Injectable } from '@angular/core';
import CreateItemIn from './CreateItemIn';
import { FridgeService } from '../service/fridge.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateItemService extends FridgeService{

  constructor(http:HttpClient) {
    super(http);
  }


  public createItem( item:CreateItemIn,icon:File){
    
    const formData = new FormData();
    
    // Add each property of the CreateItemIn instance to the FormData
    formData.append('Color', item.color);
    formData.append('Name', item.name);
    formData.append('MinimumQuantity', item.minimumQuantity.toString());
    formData.append('Quantity', item.quantity.toString());
    formData.append('Weight', item.weight.toString());
    
    // Handle Date property (Expiration) by converting to a string format (ISO string or any desired format)
    
    formData.append('Expiration', item.expiration.toISOString());
  
    // Handle file property (Icon) if it's not null or undefined
    formData.append('Icon', icon, icon.name);
    
    
    console.info(formData)

    return this.post('/Item',formData)
  }
}
