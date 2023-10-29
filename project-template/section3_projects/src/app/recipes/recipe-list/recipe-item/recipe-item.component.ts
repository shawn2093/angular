import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // 86.2 receive recipeEl from recipe-list and define recipe property stated in recipe-list html
  @Input() recipe: Recipe;
  // 87.2 output recipeSelected event
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
  }

  // 87.3 create onSelected function
  onSelected() {
    this.recipeSelected.emit();
  }
}
