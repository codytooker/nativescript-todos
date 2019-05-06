import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        title: 'testing first todo',
        isComplete: false,
      },
    ],
  },
  getters: {
    allTodos: state => state.todos,
    hasTodos: state => state.todos.length > 0,
  },
  mutations: {
    addTodo: (state, { title }) => (state.todos = [...state.todos, { title, isComplete: false }]),
    removeTodo: (state, { index }) => {
      const newTodos = [...state.todos]
      newTodos.splice(index, 1)
      state.todos = newTodos
    },
    toggleComplete: (state, { index }) => {
      state.todos = state.todos.map((todo, i) => {
        if (i !== index) return todo
        return {
          title: todo.title,
          isComplete: !todo.isComplete,
        }
      })
    },
    clearCompleted: state => {
      state.todos = state.todos.filter(todo => !todo.isComplete)
    },
  },
  actions: {
    addTodo: ({ commit }, payload) => commit('addTodo', payload),
    removeTodo: ({ commit }, payload) => commit('removeTodo', payload),
    toggleComplete: ({ commit }, payload) => commit('toggleComplete', payload),
    clearCompleted: ({ commit }) => commit('clearCompleted'),
  },
})

export default store
