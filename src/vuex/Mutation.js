const addTodo = ({ todoList }, todo) => {
  todoList.unshift(todo)
}

const removeTodo = ({ todoList }, index) => {
  todoList.splice(index, 1)
}

const moveTodoItem = (state, { index, direct }) => {
  if (direct === 'up') {
    const list = [...state.todoList]
    const temp = list[index]
    list[index] = list[index - 1]
    list[index - 1] = temp
    state.todoList = list
  }

  if (direct === 'down') {
    const list = [...state.todoList]
    const temp = list[index]
    list[index] = list[index + 1]
    list[index + 1] = temp
    state.todoList = list
  }
}

const toggleStatus = (state, index) => {
  state.todoList[index].isDone = !state.todoList[index].isDone
}

export default {
  addTodo,
  removeTodo,
  moveTodoItem,
  toggleStatus
}
