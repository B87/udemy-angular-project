import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

	@ViewChild("nameInput", {static:false}) nameInputRef: ElementRef;
	@ViewChild("amountInput", {static:false}) amountInputRef: ElementRef;

	@Output() ingredientAdded = new EventEmitter<Ingredient>();
  
	constructor() { }

  ngOnInit() {
  }

  addItem() {
	const ingName = this.nameInputRef.nativeElement.value;
	const ingAmount = this.amountInputRef.nativeElement.value;
	this.ingredientAdded.emit(new Ingredient(ingName, ingAmount))
  }
}
