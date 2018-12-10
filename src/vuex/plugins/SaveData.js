export default function (store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('todolist', JSON.stringify(state.todoList))
  })
}
