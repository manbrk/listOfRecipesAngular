import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  dateCreated = new Date();

  recipes: Recipe[] = [
    new Recipe('масло из барбершопа', 'Великолепное масло из барбершопа на Смузийной 7', this.dateCreated),
    new Recipe('крафтовый борщ', 'Прекрасный борщ от бьюти-влогера', this.dateCreated)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}