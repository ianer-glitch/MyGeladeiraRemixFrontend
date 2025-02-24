import { Component, OnInit } from '@angular/core';
import { ButtonAddItemComponent } from "../button-add-item/button-add-item.component";
import { ItemComponent } from "../item/item.component";
import { Router } from '@angular/router';
import GetItemsOut from '../../getItems/GetItemsOut';
import { GetItemsService } from '../../getItems/get-items.service';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'admin-home-item-list',
  imports: [ButtonAddItemComponent, ItemComponent,CommonModule],
  templateUrl: './admin-home-item-list.component.html',
  styleUrl: './admin-home-item-list.component.css'
})
export class AdminHomeItemListComponent implements OnInit {
  
  constructor(
    private router: Router,
    private getItemsService : GetItemsService,
    private localStorageService: LocalStorageService
  ) {
  }
  ngOnInit(): void {
    this.getItems()
  }
   
  itemsList : GetItemsOut[] = []

  getItems(){
    this.getItemsService.getItems().subscribe((res)=>this.itemsList = res)
  }

  handleClickItem(item:GetItemsOut){
    this.localStorageService.setItem('/fridge/item',item)
    this.router.navigate(['/fridge/item'])
  }

  
  handleClickAddItem(){
    this.localStorageService.removeItem('/fridge/item')
    this.router.navigate(['/fridge/item'])
  }
  
}
