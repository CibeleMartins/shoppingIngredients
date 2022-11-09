import { EventEmitter, Injectable } from "@angular/core";
import { Recipes } from "../recipes/recipes.molde";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppinListService } from "./ShoppingListService.service";

@Injectable({providedIn: 'root'})

export class RecipeService {

  recipeSelected = new EventEmitter<{name: string, description: string, image: string, ingredients: Ingredients[]}>();

  private recipes: Recipes[] = [
        new Recipes('Macarrao', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992', [
          new Ingredients('Molho de tomate', 10)
        ]),
        new Recipes('Arroz', 'corte cebola e alhos em cubinhos pequenos, refogue no óleo.', 'https://st2.depositphotos.com/3935465/7272/i/950/depositphotos_72729279-stock-photo-white-rice-in-bowl.jpg', [
          new Ingredients('Cebola', 5)
        ]),
        new Recipes('Feijão', 'cozinhe o tomate com allho e sal', 'https://st2.depositphotos.com/1373322/7341/i/600/depositphotos_73418363-stock-photo-white-beans-in-tomato-sauce.jpg', [
          new Ingredients('Um pacote de feijão', 9)
        ]),
        new Recipes('Lasanha', 'cozinhe o tomate com allho e sal', 'https://st3.depositphotos.com/2208212/37717/i/600/depositphotos_377177200-stock-photo-piece-tasty-hot-lasagna-red.jpg', [
          new Ingredients('Massa instatanea para lasanha', 12)
        ]),
    ];

    constructor(private shoppListService: ShoppinListService) {

    }

    getRecipes(){
      return this.recipes.slice();
    }

    getRecipesByIndex(index: number) {

      let arrayCopy = this.recipes.slice();

      return arrayCopy[index]
    }

    addIngredientsShoppList(ingredients: Ingredients[]) {

      this.shoppListService.addIngredientsOfDetails(ingredients)
    }
};