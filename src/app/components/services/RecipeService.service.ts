import { EventEmitter, Injectable } from "@angular/core";
import { Recipes } from "../recipes/recipes.molde";

@Injectable({providedIn: 'root'})

export class RecipeService {

    recipeSelected = new EventEmitter<{}>();

  private recipes: Recipes[] = [
        new Recipes('Macarrao', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992'),
        new Recipes('Arroz', 'corte cebola e alhos em cubinhos pequenos, refogue no óleo.', 'https://st2.depositphotos.com/3935465/7272/i/950/depositphotos_72729279-stock-photo-white-rice-in-bowl.jpg'),
        new Recipes('Feijão', 'cozinhe o tomate com allho e sal', 'https://st2.depositphotos.com/1373322/7341/i/600/depositphotos_73418363-stock-photo-white-beans-in-tomato-sauce.jpg'),
        new Recipes('Lasanha', 'cozinhe o tomate com allho e sal', 'https://st3.depositphotos.com/2208212/37717/i/600/depositphotos_377177200-stock-photo-piece-tasty-hot-lasagna-red.jpg'),
    ];


    getRecipes(){
      return this.recipes.slice();
    }
};