import { getItem, setItem } from './storage.js'

const fetchTodos = () => {
  $.ajax({
    type: 'GET',
    url: 'https://dummyjson.com/todos',
    async: false,
    success: res => {
      getItem('todos') === undefined &&
        setItem('todos', JSON.stringify(res.todos))
    },
  })
}

export default function TodoList() {
  fetchTodos()

  const $ul = document.createElement('ul')
  const todos = getItem('todos')
  todos.forEach(todo => {
    const $li = document.createElement('li')
    const text = document.createTextNode(todo.todo)
    $li.appendChild(text)
    $ul.appendChild($li)
  })

  return $ul
}
