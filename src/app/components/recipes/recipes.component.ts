import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/RecipeService.service';
import { Recipes } from './recipes.molde';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: {name: string, description: string, image: string};

  nameRecipe: string;
  descriptionRecipe: string;
  image: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipeService.recipeSelected.subscribe((recipe: {name: string, description: string, image: string})=> {
      this.selectedRecipe = recipe;
      
      console.log(this.selectedRecipe.name)

      this.nameRecipe = this.selectedRecipe.name
      this.descriptionRecipe = this.selectedRecipe.description
      this.image = this.selectedRecipe.image
    })

    // this.selectedRecipe.map((r)=> {
    //   this.nameRecipe = r.name
    //   this.descriptionRecipe = r.description
    //   this.image = r.imagePath
    // })
  }

  // receiveNameDescription(data: {name: string, description: string, img: string}) {

  //   this.nameRecipe = data.name;
  //   this.descriptionRecipe = data.description;
  //   this.image = data.img

  // }
}
