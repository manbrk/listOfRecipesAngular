import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-version',
  templateUrl: './recipe-version.component.html',
  styleUrls: ['./recipe-version.component.css']
})
export class RecipeVersionComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {

  }

}
