import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() deleteMode = new EventEmitter();
  editMode = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onEdit() {
    this.editMode = true;
  }

  onEditDone() {
    this.editMode = false;
  }

  onDelete(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.deleteMode.emit();
  }
}
