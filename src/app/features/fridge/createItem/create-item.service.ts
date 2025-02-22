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
    formData.append('Color', item.Color);
    formData.append('Name', item.Name);
    formData.append('MinimumQuantity', item.MinimumQuantity.toString());
    formData.append('Quantity', item.Quantity.toString());
    formData.append('Weight', item.Weight.toString());
    
    // Handle Date property (Expiration) by converting to a string format (ISO string or any desired format)
    // formData.append('Expiration', item.Expiration.toString());
  
    // Handle file property (Icon) if it's not null or undefined
    // formData.append('Icon', icon, icon.name);
    
    
    console.info(formData)

    return this.post('/Item',formData)
  }
}
