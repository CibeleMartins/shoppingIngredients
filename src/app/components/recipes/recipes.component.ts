import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.molde';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  nameRecipe: string;
  descriptionRecipe: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveNameDescription(data: {name: string, description: string}) {

    this.nameRecipe = data.name;
    this.descriptionRecipe = data.description;
  }
}
