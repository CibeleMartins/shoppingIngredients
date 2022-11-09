import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SelectRecipeComponent } from './components/recipes/select-recipe/select-recipe.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: SelectRecipeComponent},
    {path: ':id', component: RecipeDetailComponent},
  ]},
  {path: 'shoppList', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
