import Header from './Header.js'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import { setItem, getItem } from './storage.js'

const $header = new Header()
const $form = new TodoForm()
const $todoList = new TodoList()
const $input = $form.children[0]
const $button = $form.children[1]

const appendDOMHandler = $target => {
  $target.appendChild($header)
  $target.appendChild($form)
  $target.appendChild($todoList)
}

const setTodo = value => {
  let random = Math.floor(Math.random() * 100) + 1

  let inputData = [
    ...getItem('todos'),
    {
      id: getItem('todos').length + 1,
      todo: value,
      complete: false,
      userId: random,
    },
  ]

  const data = JSON.stringify(inputData)
  setItem('todos', data)
}

const appendListHandler = value => {
  const $li = document.createElement('li')
  const $text = document.createTextNode(value)
  $li.appendChild($text)
  $todoList.appendChild($li)
  $input.value = ''
}

const clickButtonHandler = () => {
  const value = $input.value
  if ($input.value === '') return
  setTodo(value)
  appendListHandler(value)
}

export default function App($target) {
  appendDOMHandler($target)
  $button.addEventListener('click', clickButtonHandler)
}
