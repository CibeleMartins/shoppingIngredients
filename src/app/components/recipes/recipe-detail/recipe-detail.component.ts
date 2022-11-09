import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
// import { Recipes } from '../recipes.molde';
import { RecipeService } from '../../services/RecipeService.service';

import { ActivatedRoute } from '@angular/router';

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

  constructor(private recipeService: RecipeService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.ingredients)

    this.currentRoute.snapshot.params['name']
    this.currentRoute.snapshot.params['description']
    this.currentRoute.snapshot.params['image']
    this.currentRoute.snapshot.params['ingredients']

    console.log(    this.currentRoute.snapshot.params['ingredients'])
  }

  addIngredientsShoppList(ingredients: Ingredients[]) {
   
    this.recipeService.addIngredientsShoppList(ingredients)
    
  }

}
