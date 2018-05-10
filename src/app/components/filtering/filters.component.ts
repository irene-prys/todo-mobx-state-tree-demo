import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Filter } from './../../store/filter.store';
import { TodoItemState } from './../../enums/todo-item-state.enum';

@Component({
  selector: 'todo-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  todoStates = [TodoItemState.ALL, TodoItemState.ACTIVE, TodoItemState.DONE];
  filtersStore;

  constructor(private filter: Filter) {
    this.filtersStore = filter.store;
  }

  changeSelectedStateFilter(event) {
    this.filtersStore.setStateFilter(event.target.value);
  }

  updateSearchFilter(event) {
    this.filtersStore.setSearchFilter(event.target.value);
  }

  logChangeDetection() {
    console.log('...ch/d in filtering...');
  }


}