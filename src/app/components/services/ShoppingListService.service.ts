import { Ingredients } from "../shared/ingredients.model";


export class ShoppinListService {

    ingredients: Ingredients[] = [
        new Ingredients ('Molho de tomate', 12.00)
      ];



    addIngredients(ingredient: Ingredients) {
        
        this.ingredients.push(ingredient)
    }
}