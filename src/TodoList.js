import { getItem, setItem } from './storage.js'

const removeListHandler = ($button, id) => {
  $button.addEventListener('click', e => {
    const $targetList = e.target.parentNode
    $targetList.remove()
    const todos = getItem('todos')
    const data = todos.filter(todo => todo.id !== id)
    setItem('todos', JSON.stringify(data))
  })
}

const changeListHandler = ($input, $li, id) => {
  $input.addEventListener('change', () => {
    const span = $li.children[1]
    const todos = getItem('todos')
    const targetObj = todos.find(todo => todo.id === id)

    if ($input.checked === true) {
      span.style.textDecoration = 'line-through'
      targetObj.complete = true
    } else {
      span.style.textDecoration = 'none'
      targetObj.complete = false
    }
    setItem('todos', JSON.stringify(todos))
  })
}

export const createListHandler = (id, todoValue, complete) => {
  const $li = document.createElement('li')
  const $span = document.createElement('span')
  const $text = document.createTextNode(todoValue)
  const $input = document.createElement('input')
  const $button = document.createElement('button')
  const $buttonText = document.createTextNode('삭제')

  $li.setAttribute('id', id)
  $span.appendChild($text)
  $input.setAttribute('type', 'checkbox')
  $button.appendChild($buttonText)

  $li.appendChild($input)
  $li.appendChild($span)
  $li.appendChild($button)

  if (complete) {
    $span.style.textDecoration = 'line-through'
    $input.checked = true
  } else {
    $span.style.textDecoration = 'none'
  }

  removeListHandler($button, id)
  changeListHandler($input, $li, id)

  return $li
}

export default function TodoList() {
  const $ul = document.createElement('ul')
  const todos = getItem('todos')

  if (todos !== undefined) {
    todos.forEach(todo => {
      const id = todo.id
      const todoValue = todo.todo
      const complete = todo.complete
      const $li = createListHandler(id, todoValue, complete)
      $ul.appendChild($li)
    })
  }

  return $ul
}
