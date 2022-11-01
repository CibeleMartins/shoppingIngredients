import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";


@Injectable({providedIn: 'root'})


export class ShoppinListService {

    emittIngredient = new EventEmitter<Ingredients>();

    ingredients: Ingredients[] = [
        new Ingredients ('Molho de tomate', 12.00)
      ];



    addIngredients(ingredient: Ingredients) {
        
        this.ingredients.push(ingredient)
    }
}