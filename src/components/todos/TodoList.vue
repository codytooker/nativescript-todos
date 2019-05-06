<template web>
  <div class="text-grey-darker">
    <todo-item
      v-for="(todo, i) in todos"
      :key="i"
      :todo="todo"
      @removeTodo="$emit('removeTodo', i)"
      @toggleComplete="$emit('toggleComplete', i)"
    />
    <div class="p-3 flex items-center justify-between">
      <span v-show="todos.length > 0">{{ itemsText }}</span>
      <button type="button" v-show="showComplete" @click.prevent="$emit('clearCompleted')">
        Clear Completed
      </button>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  components: {
    TodoItem,
  },
  computed: {
    itemsText() {
      return this.todos.length === 1 ? '1 item left' : `${this.todos.length} items left`
    },
    showComplete() {
      return !!this.todos.find(todo => todo.isComplete)
    },
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
}
</script>
