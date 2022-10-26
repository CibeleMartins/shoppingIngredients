import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipes } from '../recipes.molde';

import { RecipeService } from '../../services/RecipeService.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() emittNameDescription = new EventEmitter<{name: string, description: string, img: string}>();

  recipes: Recipes[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // receiveDetailRecipe(data: {name: string, description: string, img: string}) {

  //   this.emittNameDescription.emit({name: data.name, description: data.description, img: data.img})
  //   console.log(data.img)
  // }
}
