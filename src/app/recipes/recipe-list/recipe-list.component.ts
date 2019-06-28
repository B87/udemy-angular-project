import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A test recipe', 'test recipe', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694__180.jpg'),
		new Recipe('A test recipe 2', 'test recipe', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694__180.jpg')
	];

 	constructor() { }

	ngOnInit() {
	}

	onRecipeSelected(selectedRecipe: Recipe) {
		this.recipeWasSelected.emit(selectedRecipe);
	}

}
