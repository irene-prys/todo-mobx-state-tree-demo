import { Component, ChangeDetectionStrategy } from '@angular/core';
import TodosStore from './../../store/todos.store';
import { Todos } from './../../store/todos.store';

@Component({
  selector: 'todo-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent {
  titleToAdd: string;
  private todosStore;

  constructor(private todos: Todos) {
    // this.todosStore = TodosStore.instance;
    this.todosStore = todos.store;
  }

  add(event) {
    if (event.keyCode === 13) {
      this.todosStore.addNew(this.titleToAdd);
      this.titleToAdd = '';
    }
  }

  logChangeDetection() {
    console.log('...ch/d in actions....');
  }
}