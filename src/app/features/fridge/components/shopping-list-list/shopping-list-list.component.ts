import { Component, OnInit } from '@angular/core';
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";
import GetItemsShoppingListOut from '../../getItemsShoppingList/GetItemsShoppingListOut';
import { GetItemsShoppingListService } from '../../getItemsShoppingList/get-items-shopping-list.service';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";

@Component({
  selector: 'shopping-list-list',
  imports: [GenericListItemComponent, CommonModule, SkeletonComponent],
  templateUrl: './shopping-list-list.component.html',
  styleUrl: './shopping-list-list.component.css'
})
export class ShoppingListListComponent implements OnInit {
  
  constructor(private  getItemsShoppingListService : GetItemsShoppingListService) {
    
    
  }
  
  ngOnInit(): void {
    this.getItemsShoppingList()
  }

  listItems : GetItemsShoppingListOut[] = []
  isLoading:boolean = false
  getItemsShoppingList(){
    this.isLoading = true
    this.getItemsShoppingListService.getItemsShoppingList().subscribe(res=>
      {
        this.listItems = res
        this.isLoading = false
      })
  }

}
