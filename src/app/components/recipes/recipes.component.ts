import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/RecipeService.service';
import { Recipes } from './recipes.molde';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipes;

  nameRecipe: string;
  descriptionRecipe: string;
  image: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipeService.recipeSelected.subscribe((recipe: Recipes)=> {
      this.selectedRecipe = recipe;
    })

  }

  // receiveNameDescription(data: {name: string, description: string, img: string}) {

  //   this.nameRecipe = data.name;
  //   this.descriptionRecipe = data.description;
  //   this.image = data.img

  // }
}
