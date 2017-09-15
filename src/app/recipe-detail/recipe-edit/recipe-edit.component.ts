import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @Input() recipe: Recipe;

  @Output() editModeDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.recipe.name = this.signupForm.value.name;
    this.recipe.content = this.signupForm.value.content;
    this.recipe.dateCreated = new Date();
    this.recipe.versions.push({
      dateModify: new Date(),
      name: this.signupForm.value.name,
      content: this.signupForm.value.content
    });
    this.editModeDone.emit();

    console.log(this.recipe);
  }

  onCancel() {
    this.editModeDone.emit();
  }
}
