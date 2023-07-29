import Header from './Header.js'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import { setItem, getItem } from './storage.js'
import { createListHandler } from './TodoList.js'

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
  let data
  getItem('todos') === undefined
    ? (data = [{ id: 1, todo: value, complete: false }])
    : (data = [
        ...getItem('todos'),
        {
          id: getItem('todos').length + 1,
          todo: value,
          complete: false,
        },
      ])
  const arrData = JSON.stringify(data)
  setItem('todos', arrData)

  return data[data.length - 1].id
}

const appendListHandler = (id, value) => {
  const $li = createListHandler(id, value)
  $todoList.appendChild($li)
  $input.value = ''
}

const clickButtonHandler = () => {
  const value = $input.value
  if ($input.value === '') return
  const id = setTodo(value)
  appendListHandler(id, value)
}

export default function App($target) {
  appendDOMHandler($target)
  $button.addEventListener('click', clickButtonHandler)
}
