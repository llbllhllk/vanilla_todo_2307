import { getItem } from "./storage.js";

export default function TodoList() {
  const $ul = document.createElement("ul");
  const todos = getItem("todos");

  if (todos !== undefined) {
    todos.forEach((todo) => {
      const $li = document.createElement("li");
      const text = document.createTextNode(todo);
      $li.appendChild(text);
      $ul.appendChild($li);
    });
  }

  return $ul;
}
