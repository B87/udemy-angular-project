import { EventEmitter, Injectable } from '@angular/core';

import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('KrustyBurger', 'La burgerpepi', 'https://img1.mashed.com/img/gallery/fast-food-hamburgers-ranked-worst-to-best/intro-1540401194.jpg', [
			new Ingredient('Meat', 2),
			new Ingredient('Salad', 1),
			new Ingredient('Bread', 1)
		] ),
		new Recipe('Mediterranean Salad', 'test recipe', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694__180.jpg', [
			new Ingredient('Apple', 1),
			new Ingredient('Salad', 10),
			new Ingredient('Tomato', 1)
		])
	];

	constructor(private slService: ShopingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShopingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
