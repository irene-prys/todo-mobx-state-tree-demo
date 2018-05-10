import { types, onSnapshot } from "mobx-state-tree";

export const TodoItem = types.model("TodoItem", {
  title: types.string,
  done: false,
  id: types.identifier(types.number)
}).actions(self => ({
  toggle() {
    self.done = !self.done;
  },
  editTitle(title) {
    self.title = title;
  }
}));
