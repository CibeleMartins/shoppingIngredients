import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/RecipeService.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }
}
