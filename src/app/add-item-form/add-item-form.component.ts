import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BudgetItem} from '../../shared/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() budgetItem!: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() {
    // If item has a value
    if (this.budgetItem) {
      // This means that an existing item object was passed into this component, therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.budgetItem = new BudgetItem(parseInt('', 10), '');
    }
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
