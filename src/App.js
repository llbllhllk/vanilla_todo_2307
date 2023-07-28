import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem, getItem } from "./storage.js";

const $header = new Header();
const $form = new TodoForm();
const $todoList = new TodoList();
const $input = $form.children[0];
const $button = $form.children[1];

const appendDOMHandler = ($target) => {
  $target.appendChild($header);
  $target.appendChild($form);
  $target.appendChild($todoList);
};

const setTodo = (value) => {
  let data;
  getItem("todos") === undefined
    ? (data = [value])
    : (data = [...getItem("todos"), value]);
  const arrData = JSON.stringify(data);
  setItem("todos", arrData);
};

const appendListHandler = (value) => {
  const $li = document.createElement("li");
  const $text = document.createTextNode(value);
  $li.appendChild($text);
  $todoList.appendChild($li);
  $input.value = "";
};

const clickButtonHandler = () => {
  const value = $input.value;
  if ($input.value === "") return;
  setTodo(value);
  appendListHandler(value);
};

export default function App($target) {
  appendDOMHandler($target);
  $button.addEventListener("click", clickButtonHandler);
}
