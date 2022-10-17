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
  image: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveNameDescription(data: {name: string, description: string, img: string}) {

    this.nameRecipe = data.name;
    this.descriptionRecipe = data.description;
    this.image = data.img

  }
}
