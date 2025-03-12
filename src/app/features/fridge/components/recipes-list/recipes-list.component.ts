import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { AskRecipesService } from '../../askRecipes/ask-recipes.service';
import AskRecipesOut from '../../askRecipes/AskRecipesOut';
import { Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'recipes-list',
  imports: [RecipeCardComponent, CommonModule, SkeletonComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
  
})
export class RecipesListComponent implements OnInit {




  constructor(
    private askRecipesService:AskRecipesService,
    private toastService:ToastService,
    private translocoService: TranslocoService 
  ) {

    
  }
  
  ngOnInit(): void {
    this.askRecipes()
  }
  recipes : AskRecipesOut[]= []
  isLoading:boolean = false
  
  askRecipes(){
    this.isLoading = true
    const language = this.translocoService.getActiveLang()
    this.askRecipesService.askRecipes(language).subscribe((res)=>{
      this.recipes = res
      this.isLoading =false
    })
  }

}
