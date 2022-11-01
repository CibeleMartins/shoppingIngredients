import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";


@Injectable({providedIn: 'root'})


export class ShoppinListService {

    emittIngredient = new EventEmitter<Ingredients[]>();

   private ingredients: Ingredients[] = [
        new Ingredients ('Molho de tomate', 12.00)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredients) {
        
        this.ingredients.push(ingredient);
        this.emittIngredient.emit(this.ingredients.slice())
    }

    addIngredientsOfDetails(ingredients: Ingredients[]) {

        this.ingredients.push(...ingredients)
        this.emittIngredient.emit(this.ingredients.slice())
    }

}