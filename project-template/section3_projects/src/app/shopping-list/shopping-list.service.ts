import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient("apple", 5),
        new Ingredient("tomatoes", 10),
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // return this.ingredients.slice();
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}