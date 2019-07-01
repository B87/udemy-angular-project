import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

	@ViewChild("nameInput", {static:false}) nameInputRef: ElementRef;
	@ViewChild("amountInput", {static:false}) amountInputRef: ElementRef;

	@Output() ingredientAdded = new EventEmitter<Ingredient>();
  
    constructor(private slService: ShopingListService) { }

    ngOnInit() {}

  addItem() {
	const ingName: string = this.nameInputRef.nativeElement.value;
	const ingAmount: number = this.amountInputRef.nativeElement.value;
	this.slService.addIngredient(new Ingredient(ingName, ingAmount))
  }
}
