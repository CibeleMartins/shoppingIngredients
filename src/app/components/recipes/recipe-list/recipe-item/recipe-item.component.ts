import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.molde';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipes[];

  @Output() emittDetailRecipe = new EventEmitter<{name: string, description: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDetailRecipe(recipeName: string, recipeDescription: string) {

    this.emittDetailRecipe.emit({name: recipeName, description: recipeDescription})
  }

}
