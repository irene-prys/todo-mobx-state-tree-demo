import { Injectable } from '@angular/core';
// import * as todoItem from './todo-item.store';
import { TodoItem } from './todo-item.store';

import { types, onSnapshot } from "mobx-state-tree";

const TodoListStore = types.model("TodoList", {
  list: types.array(TodoItem)
})
  .views(self => ({
    get countOfActive() {
      return self.list.filter(item => !item.done).length;
    },
    isInList(title) {
      return self.list.find(item => item.title === title);
    },
    get isEmpty() {
      return self.list.length === 0;
    }
  }))
  .actions(self => ({
    addNew(title: string) {
      let itemId = self.list.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      // self.list.push({ id: itemId, title } as any);
      self.list.push(TodoItem.create({ id: itemId, title }));
    }
    // todo: implement removing
  }));

// export const instance = TodoList.create({ todos: [] });


@Injectable()
export class Todos {
  public store = TodoListStore.create({ list: [] });
}