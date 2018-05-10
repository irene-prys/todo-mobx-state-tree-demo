import { Injectable } from '@angular/core';
import { TodoItemState } from './../enums/todo-item-state.enum';
import { types } from "mobx-state-tree";

const FilterStore = types.model("FilterStore", {
  searchFilter: types.string,
  stateFilter: types.enumeration([TodoItemState.ALL, TodoItemState.ACTIVE, TodoItemState.DONE])
})
  .actions(self => ({
    setSearchFilter(value: string) {
      self.searchFilter = value;
    },

    setStateFilter(value: TodoItemState) {
      self.stateFilter = value;
    }

  }));

@Injectable()
export class Filter {
  store = FilterStore.create({ searchFilter: '', stateFilter: TodoItemState.ALL });
}