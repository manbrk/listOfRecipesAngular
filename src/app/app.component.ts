import { Component } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedRecipe: Recipe;
  title = 'app';
}
