<template web>
  <div>
    <input
      class="py-4 pr-4 pl-16 w-full text-xl"
      type="text"
      placeholder="What needs to be done?"
      v-model="todo"
      @keyup.enter="submit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    }
  },
  methods: {
    submit() {
      if (!this.todo) return

      this.$emit('addTodo', this.todo)
      this.todo = ''
    },
  },
}
</script>
