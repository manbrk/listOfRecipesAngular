import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.model';
import {NgForm} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @Output() onAddDone = new EventEmitter();
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAdd() {
    this.recipe = new Recipe(this.signupForm.value.name, this.signupForm.value.content, new Date(), []);
    this.recipeService.addRecipe(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
    this.onAddDone.emit();
  }

  onCancel() {
    this.onAddDone.emit();
  }
}
