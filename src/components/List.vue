<template>
  <div>
    <h1>todo list</h1>
    <input @keypress="addTodo" v-model="inputValue" placeholder="what to do..."/>
    <ul>
      <ListItem v-for="(todo, index) in todoList" :key="todo.id">
        <div class="todo-item">
          <input type="checkbox" @click="toggleStatus(index)" :checked="todo.isDone"/>
          <span :class="{'is-done': todo.isDone }">{{ todo.thing }}</span>
          <button @click="removeTodo(index)">-</button>
          <button @click="moveTodoItem({ index, direct: 'up' })" v-show="index !== 0">u</button>
          <button @click="moveTodoItem({ index, direct: 'down' })" v-show="index !== todoList.length -1">d</button>
        </div>
      </ListItem>
    </ul>
    <div>
      <span>Total: {{ this.todoList.length }}</span>
      <span>Done: {{ this.compeleted.length }}</span>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import { mapActions } from 'vuex'

export default {
  name: 'List',
  components: {
    ListItem
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapActions([
      'removeTodo',
      'moveTodoItem',
      'toggleStatus'
    ]),
    addTodo (e) {
      const code = e.keyCode
      if (code === 13) {
        if (this.inputValue.trim()) {
          const todo = {
            id: Date.now(),
            thing: this.inputValue.trim(),
            isDone: false
          }
          this.$store.dispatch('addTodo', todo)
        }

        this.inputValue = ''
      }
    }
  },
  computed: {
    todoList () { return this.$store.state.todoList },
    compeleted () {
      return this.todoList.filter(todo => todo.isDone)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  .is-done {
    text-decoration: line-through;
  }
  .todo-item {
    width: 18%;
    display: flex;
    margin: 0 auto;
    border-bottom: 1px solid #c0c0c0;
    padding: 3px;
    word-break: break-all;
  }
  .todo-item input {
    flex: 0 0 5px;
  }
  .todo-item span  {
    text-align: left;
    flex-grow: 1;
  }
  button {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    line-height: 10px;
    box-shadow: 5px 5px 8px rgb(216, 216, 216);
    padding: 3px;
    color: white;
    font-size: 500;
    background-color: #f34545;
  }
</style>
