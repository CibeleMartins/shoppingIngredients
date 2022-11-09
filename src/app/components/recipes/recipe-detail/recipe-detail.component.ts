import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
// import { Recipes } from '../recipes.molde';
import { RecipeService } from '../../services/RecipeService.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  recipes: Recipes;

  constructor(private recipeService: RecipeService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.ingredients

    console.log( this.currentRoute.snapshot.params['id'])

    this.currentRoute.params.subscribe((params: Params)=> {

      console.log(params['id']);

      this.recipes = this.recipeService.getRecipesByIndex(+params['id']);
    })

   
  }

  addIngredientsShoppList(ingredients: Ingredients[]) {
   
    this.recipeService.addIngredientsShoppList(ingredients)
    
  }

}
