import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]), 
        new Recipe(
            'A 2nd Recipe', 
            'This is simply a test', 
            'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 2)
            ])
    ];

    constructor(private SLService: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientstoShoppingList(ingredients: Ingredient[]) {
        this.SLService.addIngredients(ingredients);
    }
}