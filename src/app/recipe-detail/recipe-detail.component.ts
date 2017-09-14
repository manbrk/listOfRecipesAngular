import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  editMode = false;
  constructor() { }

  ngOnInit() {
  }

  onEdit(recipe: Recipe) {
    console.log(recipe);
    this.editMode = true;
  }

  onEditDone() {
    this.editMode = false;
  }
}
