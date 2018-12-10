const addTodo = ({ commit }, todo) => {
  commit('addTodo', todo)
}

const removeTodo = ({ commit }, index) => {
  commit('removeTodo', index)
}

const moveTodoItem = ({ commit }, playLoad) => {
  commit('moveTodoItem', playLoad)
}

const toggleStatus = ({ commit }, index) => {
  commit('toggleStatus', index)
}

export default {
  addTodo,
  removeTodo,
  moveTodoItem,
  toggleStatus
}
