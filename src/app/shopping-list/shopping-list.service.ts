// import { Injectable } from '@angular/core';

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    // USED TO ADD THE INGREDIENTS PROPERLY
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
