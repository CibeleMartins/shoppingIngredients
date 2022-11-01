import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.molde';
import { RecipeService } from 'src/app/components/services/RecipeService.service';
import { Ingredients } from 'src/app/components/shared/ingredients.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipes[];

  // @Output() emittDetailRecipe = new EventEmitter<{name: string, description: string, img: string}>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  sendDetailRecipe(recipeName: string, recipeDescription: string, imagePath: string, ingredients: Ingredients[]) {


    this.recipeService.recipeSelected.emit({name: recipeName, description: recipeDescription, image: imagePath, ingredients: ingredients})
    // this.emittDetailRecipe.emit({name: recipeName, description: recipeDescription, img: imagePath})
    // console.log(this.recipes)

    // console.log(ingredients)
    // console.log(recipeName)
  }

}
