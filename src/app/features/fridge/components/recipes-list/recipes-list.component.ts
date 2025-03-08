import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { AskRecipesService } from '../../askRecipes/ask-recipes.service';
import AskRecipesOut from '../../askRecipes/AskRecipesOut';
import { Observer } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recipes-list',
  imports: [RecipeCardComponent,CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {




  constructor(
    public askRecipesService:AskRecipesService,
    public toastService:ToastService ) {

    
  }
  
  ngOnInit(): void {
    this.askRecipes()
  }
  recipes : AskRecipesOut[]= []
  isLoading:boolean = false
  
  askRecipes(){
    this.isLoading = true
    const options : Observer<AskRecipesOut[]> = {
      next:(res)=>{
        this.recipes = res
      },
      error:()=>{
        this.toastService.showError("Não foi possível recomendar receitas")
        this.isLoading = false
      },
      complete:()=>{
        this.isLoading = false
      }
    }
    this.askRecipesService.askRecipes().subscribe(options)
  }

}
