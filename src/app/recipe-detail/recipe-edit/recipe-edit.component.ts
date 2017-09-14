import {Component, Input, OnInit, ViewChild} from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    console.log(new Date());

    this.recipe.name = this.signupForm.value.name;
    this.recipe.content = this.signupForm.value.content;
    this.recipe.dateCreated = new Date();
  }

}
