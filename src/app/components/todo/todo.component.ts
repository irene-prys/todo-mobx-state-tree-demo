import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoItemState } from './../../enums/todo-item-state.enum';
import { Todos } from './../../store/todos.store';
import { Filter } from './../../store/filter.store';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  private todosStore;
  private filterStore;

  constructor(private todos: Todos, private filter: Filter) {
    this.todosStore = todos.store;
    this.filterStore = filter.store;
  }

  public get todoList() {
    let todos = this.todosStore.list;
    return todos.filter(item => {
      if (!this.isSatisfySerchFilter(item, this.filterStore.searchFilter)) {
        return false;
      }
      switch (this.filterStore.stateFilter) {
        case TodoItemState.ACTIVE: return !item.done;
        case TodoItemState.DONE: return item.done;
        default: return true;
      }
    });
  }

  get isTodoEmpty() {
    return this.todosStore.isEmpty;
  }

  logChangeDetection() {
    console.log('...ch/d in list...' + JSON.stringify(this.todoList));
  }

  private isSatisfySerchFilter(todoItem, serchFilter: string) {
    if (serchFilter.trim().length === 0) {
      return true;
    }

    return todoItem.title.includes(serchFilter);
  }

}