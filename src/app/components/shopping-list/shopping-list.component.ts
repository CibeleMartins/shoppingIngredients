import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppinListService } from '../services/ShoppingListService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  storeSubscription: Subscription;

  constructor(private serviceList: ShoppinListService) {}

  ngOnInit(): void {
    this.ingredients = this.serviceList.getIngredients();

    this.storeSubscription = this.serviceList.emittIngredient.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    console.log(index)
      this.serviceList.emittIdIngredientEditing.next(index);
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
