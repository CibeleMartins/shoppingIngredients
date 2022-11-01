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

    this.ingredients = this.serviceList.getIngredients();

    this.serviceList.emittIngredient.subscribe((ingredients: Ingredients[])=> {

      this.ingredients = ingredients;
     
    })


  }

  // onIngredientAdded(ingredient: Ingredients) {

  //   this.ingredients.push(ingredient)
  // }

}
