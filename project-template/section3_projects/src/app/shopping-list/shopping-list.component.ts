import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient("apple", 5),
  //   new Ingredient("tomatoes", 10),
  // ]
  
  // constructor() {}

  // ngOnInit(): void {
  // }

  // onIngredientAdded(ingredient:Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  ingredients: Ingredient[];

  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {
      this.ingredients = this.SLService.getIngredients();
      this.SLService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }
}
