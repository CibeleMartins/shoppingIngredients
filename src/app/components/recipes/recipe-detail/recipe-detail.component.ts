import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  nameRecipe: string;
  descriptionRecipe: string;
  image: string;

  @Input() selectedRecipe: Recipes;

  constructor() { }

  ngOnInit(): void {

    // this.selectedRecipe.map((i)=> {

    //   this.nameRecipe = i.name
    //   this.descriptionRecipe= i.description
    //   this.image = i.imagePath
    // })
   
  }

  

}
