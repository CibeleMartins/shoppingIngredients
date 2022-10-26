import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.molde';
import { RecipeService } from 'src/app/components/services/RecipeService.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipes;

  // @Output() emittDetailRecipe = new EventEmitter<{name: string, description: string, img: string}>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  sendDetailRecipe(recipeName: string, recipeDescription: string, imagePath: string) {

    this.recipeService.recipeSelected.emit(this.recipes)
    // this.emittDetailRecipe.emit({name: recipeName, description: recipeDescription, img: imagePath})
    console.log(imagePath)
  }

}
