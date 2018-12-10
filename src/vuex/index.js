import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './Mutation'
import actions from './Action'
import saveDataPlugins from './plugins/SaveData'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todolist')) || []
  },
  mutations,
  actions,
  plugins: [saveDataPlugins]
})
