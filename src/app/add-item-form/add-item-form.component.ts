import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BudgetItem} from '../../shared/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() budgetItem: BudgetItem = new BudgetItem(parseInt('', 10), '');
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
