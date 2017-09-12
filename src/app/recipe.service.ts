import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  dateCreated = new Date();

  private recipes: Recipe[] = [
    new Recipe('масло из барбершопа', 'Великолепное масло из барбершопа на Смузийной 7', this.dateCreated),
    new Recipe('крафтовый борщ', 'Прекрасный борщ от бьюти-влогера', this.dateCreated)
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
