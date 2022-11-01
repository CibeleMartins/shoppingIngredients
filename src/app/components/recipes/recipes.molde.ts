import { Ingredients } from "../shared/ingredients.model";

export class Recipes {

    name: string;
    description:string;
    imagePath:string;
    ingredients: Ingredients[];

    constructor(name: string, descrip: string, imagePath:string, ingredients: Ingredients[]) {
        
        this.name = name;
        this.description = descrip;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
}