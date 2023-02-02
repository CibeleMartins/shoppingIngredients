import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class ShoppinListService {

    emittIngredient = new Subject<Ingredients[]>();
    emittIdIngredientEditing = new Subject<number>();
  

   private ingredients: Ingredients[] = [
        new Ingredients ('Molho de tomate', 12.00)
    ];

    getIngredientByIndex(index: number) {

        // console.log(this.ingredients[index])
       return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredients) {
        // console.log(ingredient)
        this.ingredients.push(ingredient);
        this.emittIngredient.next(this.ingredients.slice())
        console.log(this.ingredients)
    }

    addIngredientsOfDetails(ingredients: Ingredients[]) {

        this.ingredients.push(...ingredients)
        this.emittIngredient.next(this.ingredients.slice())
    }

    updatedIngredient(index: number, newIngredient: Ingredients) {
        this.ingredients[index] = newIngredient;
        return this.emittIngredient.next(this.ingredients.slice());
    }

    deleteIngredientByIndex(index: number) {


        this.ingredients.splice(index, 1);
        this.emittIngredient.next(this.ingredients.slice());
        console.log(this.ingredients)
    }

}