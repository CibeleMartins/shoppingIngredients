import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() nameRecipe: string;
  @Input() descriptionRecipe: string;
  @Input() image: string;

  @Input() selectedRecipe: {name: string, description: string, image: string};

  constructor() { }

  ngOnInit(): void {

    console.log(this.nameRecipe)

    // this.selectedRecipe.map((i)=> {

    //   this.nameRecipe = i.name
    //   this.descriptionRecipe= i.description
    //   this.image = i.imagePath
    // })
   
  }


  

}
