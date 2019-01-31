import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrigRecipeComponent } from './orig-recipe/orig-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CopyInputService } from './copy-input.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OrigRecipeComponent, RecipeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CopyInputService]
})
export class AppModule { }
