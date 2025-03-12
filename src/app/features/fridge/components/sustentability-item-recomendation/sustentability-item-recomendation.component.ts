import { Component, OnInit } from '@angular/core';
import { PageSubtitleComponent } from "../../../../shared/components/organisms/page-subtitle/page-subtitle.component";
import { GetRecommendedItemsService } from '../../getRecommendedItems/get-recommended-items.service';
import GetRecommendedItemsOut from '../../getRecommendedItems/GetRecommendedItemsOut';
import { Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { CommonModule } from '@angular/common';
import { ListTemComponent } from "../../../../shared/components/atoms/list-tem/list-tem.component";
import { GenericListItemComponent } from "../../../../shared/components/molecules/generic-list-item/generic-list-item.component";
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'sustentability-item-recomendation',
  imports: [PageSubtitleComponent,
    CommonModule,
    ListTemComponent,
    GenericListItemComponent,
    SkeletonComponent,
    TranslocoDirective],
  templateUrl: './sustentability-item-recomendation.component.html',
  styleUrl: './sustentability-item-recomendation.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class SustentabilityItemRecomendationComponent implements OnInit{
  
  constructor(
    private getRecommendedItemService : GetRecommendedItemsService,
    private toastService: ToastService,
    private translocoService:TranslocoService
  ) {
    
    
  }
  translocoPath="statistic.manage-statistic.sustentability-item-recomendation"
  ngOnInit(): void {
   this.getRecommendedItems()
  }

  recommendedItems : GetRecommendedItemsOut[] = []
  isLoading:boolean = false

  getRecommendedItems(){
    this.isLoading = true
    const language = this.translocoService.getActiveLang()
    this.getRecommendedItemService.getRecommendedItems(language).subscribe((res)=>{
      this.recommendedItems=res
      this.isLoading = false
    })
  }

}
