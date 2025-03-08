import { Component, OnInit } from '@angular/core';
import { PageSubtitleComponent } from "../../../../shared/components/organisms/page-subtitle/page-subtitle.component";
import { GetRecommendedItemsService } from '../../getRecommendedItems/get-recommended-items.service';
import GetRecommendedItemsOut from '../../getRecommendedItems/GetRecommendedItemsOut';
import { Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { CommonModule } from '@angular/common';
import { ListTemComponent } from "../../../../shared/components/atoms/list-tem/list-tem.component";
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";

@Component({
  selector: 'sustentability-item-recomendation',
  imports: [PageSubtitleComponent, CommonModule, ListTemComponent, GenericListItemComponent],
  templateUrl: './sustentability-item-recomendation.component.html',
  styleUrl: './sustentability-item-recomendation.component.css'
})
export class SustentabilityItemRecomendationComponent implements OnInit{
  
  constructor(
    private getRecommendedItemService : GetRecommendedItemsService,
    private toastService: ToastService
  ) {
    
    
  }
  
  ngOnInit(): void {
    this.getRecommendedItems()

  }

  recommendedItems : GetRecommendedItemsOut[] = []
  isLoading:boolean = false

  getRecommendedItems(){
    this.isLoading = true
    const options : Observer<GetRecommendedItemsOut[]> = {
      next:(res)=>{
        this.recommendedItems=res
        
      },
      error:()=>{
        this.toastService.showError("Não foi possível buscar recomendações de items")
        this.isLoading = false
      },
      complete:()=>{
        this.isLoading = false
      }
    }
    
    this.getRecommendedItemService.getRecommendedItems().subscribe(options)
  }

}
