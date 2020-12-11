import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from '../../shared/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = new Array<BudgetItem>();
  @Output() xButtonClick: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem): void {
    this.xButtonClick.emit(item);
  }

}
