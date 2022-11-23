import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})


export class ShoppinListService {

    emittIngredient = new Subject<Ingredients[]>();

   private ingredients: Ingredients[] = [
        new Ingredients ('Molho de tomate', 12.00)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredients) {
        
        this.ingredients.push(ingredient);
        this.emittIngredient.next(this.ingredients.slice())
    }

    addIngredientsOfDetails(ingredients: Ingredients[]) {

        this.ingredients.push(...ingredients)
        this.emittIngredient.next(this.ingredients.slice())
    }

}