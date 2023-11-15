import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
// export class RecipeItemComponent implements OnInit {
//   // 86.2 receive recipeEl from recipe-list and define recipe property stated in recipe-list html
//   @Input() recipe: Recipe;
//   // 87.2 output recipeSelected event
//   @Output() recipeSelected = new EventEmitter<void>();

//   constructor() {}

//   ngOnInit() {
//   }

//   // 87.3 create onSelected function
//   onSelected() {
//     this.recipeSelected.emit();
//   }
// }

export class RecipeItemComponent implements OnInit {
  // 86.2 receive recipeEl from recipe-list and define recipe property stated in recipe-list html
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  // 87.3 create onSelected function
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}