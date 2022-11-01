import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

import { ShoppinListService } from '../../services/ShoppingListService.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild ("inputNameIngredient", {static: true}) inputNameIngredient : ElementRef;
  @ViewChild ("inputAmountIngredient", {static: true}) inputAmountIngredient : ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor(private serviceList: ShoppinListService) { }

  ngOnInit(): void {
  }

  onAddItem(event: Event) {

    event.preventDefault();

    const nameIngredient = this.inputNameIngredient.nativeElement.value;
    const amountIngredient = this.inputAmountIngredient.nativeElement.value;

    const newIngredient = new Ingredients(nameIngredient, amountIngredient);

    this.serviceList.addIngredients(newIngredient)

    
    // this.ingredientAdded.emit(newIngredient)

  }


}
