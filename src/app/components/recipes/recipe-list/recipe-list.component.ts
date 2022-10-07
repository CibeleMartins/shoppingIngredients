import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('Macarrao', 'cozinhe o tomate com allho e sal', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.tudogostoso.com.br%2Fcardapios%2Freceitas-faceis%2Freceitas-de-macarrao-confira%2F&psig=AOvVaw2yGWbdNw5lIYnvtMtqOznG&ust=1665248557182000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjIlLfMzvoCFQAAAAAdAAAAABAE')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
