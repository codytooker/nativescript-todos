<template web>
  <div class="flex items-center p-4 border-b-2 border-grey-light">
    <button
      type="button"
      class="border border-grey rounded-full w-8 h-8 mr-4 focus:outline-none"
      :class="{ 'bg-green': todo.isComplete, 'hover:bg-green-lightest': !todo.isComplete }"
      @click.prevent="$emit('toggleComplete')"
    />
    <span class="text-lg" :class="{ 'text-grey line-through': todo.isComplete }">{{
      todo.title
    }}</span>
    <button
      class="ml-auto text-4xl font-light text-red-lightest hover:text-red-dark focus:outline-none"
      @click.prevent="$emit('removeTodo')"
    >
      &times;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
}
</script>
