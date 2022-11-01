import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/RecipeService.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  nameRecipe: string;
  descriptionRecipe: string;
  image: string;
  igdt: Ingredients[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipeService.recipeSelected.subscribe((recipe: {name: string, description: string, image: string, ingredients: Ingredients[]})=> {

      this.nameRecipe = recipe.name
      this.descriptionRecipe = recipe.description
      this.image = recipe.image
      this.igdt = recipe.ingredients

      console.log(recipe.ingredients)
    })


  }
}
