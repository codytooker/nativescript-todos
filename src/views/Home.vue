<template web>
  <div>
    <h1 class="mb-4 text-center text-red-lighter font-thin text-5xl">{{ title }}</h1>
    <div class="bg-white shadow">
      <todo-input @addTodo="this.handleAddTodo" />
      <p v-show="hasTodos">This should only show if there are todos</p>
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

export default {
  name: 'home',
  components: {
    TodoInput,
  },

  data() {
    return {
      title: 'todos',
      todos: [],
    }
  },
  computed: {
    hasTodos() {
      return this.todos.length > 0
    },
  },
  methods: {
    handleAddTodo(todo) {
      this.todos = [
        ...this.todos,
        {
          title: todo,
          completed: false,
        },
      ]
    },
  },
}
</script>

<style scoped></style>
