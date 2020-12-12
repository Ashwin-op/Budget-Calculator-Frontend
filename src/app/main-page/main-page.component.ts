import {Component, OnInit} from '@angular/core';
import {BudgetItem} from '../../shared/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(item: BudgetItem): void {
    this.budgetItems.push(item);

    this.totalBudget += item.amount;
  }

  deleteItem(item: BudgetItem): void {
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);

    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent): void {
    // Result is the update budget item
    // Replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // Update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
