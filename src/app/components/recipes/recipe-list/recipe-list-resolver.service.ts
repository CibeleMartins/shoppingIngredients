import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Recipes } from "../recipes.molde";

import { Injectable } from "@angular/core";

import {RecipeService} from '../../services/RecipeService.service';


@Injectable()

export class RecipeListResolver implements Resolve<Recipes[]> {


    constructor(private recipeService: RecipeService) {

    }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipes[] | Observable<Recipes[]> | Promise<Recipes[]> {
      
    return this.recipeService.getRecipes()
  }

}