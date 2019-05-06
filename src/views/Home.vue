<template web>
  <div>
    <h1 class="mb-4 text-center text-red-lighter font-thin text-5xl">{{ title }}</h1>
    <div class="bg-white shadow">
      <todo-input @addTodo="this.handleAddTodo" />
      <todo-list
        v-show="hasTodos"
        :todos="this.allTodos"
        @removeTodo="this.handleRemoveTodo"
        @toggleComplete="this.toggleComplete"
        @clearCompleted="this.clearCompleted"
      />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <StackLayout backgroundColor="#3c495e"></StackLayout>
  </Page>
</template>

<script>
import TodoInput from '~/components/todos/TodoInput'
import TodoList from '~/components/todos/TodoList'

export default {
  name: 'home',
  components: {
    TodoInput,
    TodoList,
  },

  data() {
    return {
      title: 'todos',
      todos: [],
    }
  },
  computed: {
    allTodos() {
      return this.$store.getters.allTodos
    },
    hasTodos() {
      return this.$store.getters.hasTodos
    },
  },
  methods: {
    handleAddTodo(title) {
      this.$store.dispatch('addTodo', { title })
    },
    handleRemoveTodo(index) {
      this.$store.dispatch('removeTodo', { index })
    },
    toggleComplete(index) {
      this.$store.dispatch('toggleComplete', { index })
    },
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    },
  },
}
</script>

<style scoped></style>
