import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.molde';
import { RecipeService } from 'src/app/components/services/RecipeService.service';
import { Ingredients } from 'src/app/components/shared/ingredients.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipes[];

  // @Output() emittDetailRecipe = new EventEmitter<{name: string, description: string, img: string}>();

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  sendDetailRecipe(index: number) {

    // this.recipeService.recipeSelected.emit({name: recipeName, description: recipeDescription, image: imagePath, ingredients: ingredients})
    // this.emittDetailRecipe.emit({name: recipeName, description: recipeDescription, img: imagePath})
    // console.log(this.recipes)

    this.router.navigate(['/recipes', index]);

    // console.log(ingredients)
    // console.log(recipeName)
  }

}
