import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {RecipeService} from './recipe.service';
import { RecipeEditComponent } from './recipe-detail/recipe-edit/recipe-edit.component';
import {FormsModule} from '@angular/forms';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeVersionComponent } from './recipe-version/recipe-version.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeAddComponent,
    RecipeVersionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
