import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvvy9uOBJkewW7zbTGMr03B81f5klHJ10qQ&s'),
    new Recipe('A second test recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZgJC7wnYEkZiKNOvB4aNvr042jHEhwgUEw&s')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
