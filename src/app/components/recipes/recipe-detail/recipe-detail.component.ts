import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
// import { Recipes } from '../recipes.molde';
import { RecipeService } from '../../services/RecipeService.service';

import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipes: Recipes;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.ingredients

    console.log(this.currentRoute.snapshot.params['id']);

    this.currentRoute.params.subscribe((params: Params) => {
      console.log(params['id']);

      this.id = +params['id'];

      this.recipes = this.recipeService.getRecipesByIndex(this.id);
    });
  }

  navigateForEditRecipe() {
    this.router.navigate(['/recipes', this.id, 'edit']);
  }

  addIngredientsShoppList(ingredients: Ingredients[]) {
    this.recipeService.addIngredientsShoppList(ingredients);
  }
}
