import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.molde';

import { RecipeService } from '../../services/RecipeService.service';

import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() emittNameDescription = new EventEmitter<{name: string, description: string, img: string}>();

  recipes: Recipes[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
