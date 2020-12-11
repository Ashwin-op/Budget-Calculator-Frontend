import {Component, OnInit} from '@angular/core';
import {BudgetItem} from '../../shared/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(item: BudgetItem): void {
    this.budgetItems.push(item);
  }

  deleteItem(item: BudgetItem): void {
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
  }

}
