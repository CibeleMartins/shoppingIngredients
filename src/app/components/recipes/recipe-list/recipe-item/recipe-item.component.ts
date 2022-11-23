import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.molde';
import { RecipeService } from 'src/app/components/services/RecipeService.service';
import { Ingredients } from 'src/app/components/shared/ingredients.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipes[];

  // @Output() emittDetailRecipe = new EventEmitter<{name: string, description: string, img: string}>();

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  sendDetailRecipe(index: number) {
    this.router.navigate(['/recipes', index]);
  }
}
