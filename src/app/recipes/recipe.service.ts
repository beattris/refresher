import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Super Tasty Burger!',
      'The ultimate most mouthwatering burger!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItBYtuXbI_ZxUARoIYY_n5pALpTWU6LLEnw&s',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe(
      'Super Apetizing Steak!',
      'The right steak for you!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwnNpTvSw4CTfUYpkFhGDOdlFWiPpuxM2kw&s',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Pepper', 4),
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
