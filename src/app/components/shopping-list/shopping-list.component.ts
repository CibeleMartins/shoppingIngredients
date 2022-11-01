import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import { ShoppinListService } from '../services/ShoppingListService.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[];

  constructor(private serviceList: ShoppinListService) { }

  ngOnInit(): void {

    this.serviceList.emittIngredient.subscribe((ingredient: Ingredients)=> {

      this.serviceList.addIngredients(ingredient)

    })

    this.ingredients = this.serviceList.ingredients
  }

  // onIngredientAdded(ingredient: Ingredients) {

  //   this.ingredients.push(ingredient)
  // }

}
