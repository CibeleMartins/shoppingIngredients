import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../services/RecipeService.service';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipesEdit: Recipes;
  editMode = false;

  constructor(private currentRoute: ActivatedRoute, private recipeService: RecipeService) { 

    this.currentRoute.params.subscribe((params: Params)=> {

      const id = +params['id'];

      this.recipesEdit = this.recipeService.getRecipesByIndex(id)

      this.editMode = params['id'] != null;

      console.log(this.editMode)
    })

  }

  ngOnInit(): void {
  }

}
