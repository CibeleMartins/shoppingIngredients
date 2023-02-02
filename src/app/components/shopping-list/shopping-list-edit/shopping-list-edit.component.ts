import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

import { ShoppinListService } from '../../services/ShoppingListService.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f', { static: true }) formEdit: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredients;


  constructor(private serviceList: ShoppinListService) {}

  ngOnInit(): void {
    this.subscription = this.serviceList.emittIdIngredientEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.serviceList.getIngredientByIndex(index);
        console.log(this.editedItem)
        this.formEdit.setValue({
          nameIngredient: this.editedItem.name,
          amountIngredient: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(event: Event, f: NgForm): void {
    event.preventDefault();
    event.stopPropagation();

    // const nameIngredient = this.inputNameIngredient.nativeElement.value;
    // const amountIngredient = this.inputAmountIngredient.nativeElement.value;

    const newIngredient = new Ingredients(
      f.value.nameIngredient,
      f.value.amountIngredient
    );

    this.serviceList.addIngredients(newIngredient);
  }
}
