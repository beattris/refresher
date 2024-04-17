import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvvy9uOBJkewW7zbTGMr03B81f5klHJ10qQ&s')
  ];
}
