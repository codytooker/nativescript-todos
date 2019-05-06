<template web>
  <input
    class="py-4 pr-4 pl-16 w-full text-xl border-b-2 border-grey"
    type="text"
    :placeholder="placeholder"
    v-model="todo"
    @keyup.enter="submit"
  />
</template>

<template native>
  <TextField v-model="todo" :hint="placeholder" @returnPress="submit" />
</template>

<script>
export default {
  data() {
    return {
      todo: '',
      placeholder: 'What needs to be done?',
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
