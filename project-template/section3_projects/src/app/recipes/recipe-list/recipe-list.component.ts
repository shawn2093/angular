import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
// export class RecipeListComponent implements OnInit{
//   // 87.5 create new event to output recipe
//   @Output() recipeWasSelected = new EventEmitter<Recipe>();
//   recipes: Recipe[] = [
//     new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg'), 
//     new Recipe('A 2nd Recipe', 'This is simply a test', 'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg')
//   ];

//   constructor() {}

//   ngOnInit() {
//   }

//   // 87.6 create OnRecipeSelected() to receive data
//   onRecipeSelected(recipe: Recipe) {
//     this.recipeWasSelected.emit(recipe);
//   }
// }

export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
}