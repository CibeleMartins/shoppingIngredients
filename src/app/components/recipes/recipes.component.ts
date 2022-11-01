import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/RecipeService.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  nameRecipe: string;
  descriptionRecipe: string;
  image: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipeService.recipeSelected.subscribe((recipe: {name: string, description: string, image: string})=> {

      this.nameRecipe = recipe.name
      this.descriptionRecipe = recipe.description
      this.image = recipe.image
    })

  }
}
