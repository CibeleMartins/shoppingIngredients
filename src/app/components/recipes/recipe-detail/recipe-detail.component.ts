import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
// import { Recipes } from '../recipes.molde';
import { RecipeService } from '../../services/RecipeService.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() nameRecipe: string;
  @Input() descriptionRecipe: string;
  @Input() image: string;
  @Input () igdt: Ingredients[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // console.log(this.ingredients)
  }

  addIngredientsShoppList(ingredients: Ingredients[]) {
   
    this.recipeService.addIngredientsShoppList(ingredients)
    
  }

}
