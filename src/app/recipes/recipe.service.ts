// import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root',
// })

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvvy9uOBJkewW7zbTGMr03B81f5klHJ10qQ&s'),
        new Recipe('A second test recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZgJC7wnYEkZiKNOvB4aNvr042jHEhwgUEw&s')
      ];
    constructor(){}

    getRecipes() {
        return this.recipes.slice();
    }
}
