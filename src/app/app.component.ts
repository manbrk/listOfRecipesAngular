import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedRecipe: Recipe;
  title = 'Список Рецептов';
  addMode = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
   this.recipeService.recipeSelected
     .subscribe(
       (recipe: Recipe) => {
         this.selectedRecipe = recipe;
       }
     );
   this.addMode = false;
  }

  deleteModeDone() {
    this.selectedRecipe = null;
  }

  onAddMode() {
    this.addMode = true;
  }

  addModeDone() {
    this.addMode = false;
  }

}
