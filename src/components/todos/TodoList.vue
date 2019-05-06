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

<template native>
  <RadListView for="todo in todos" :swipeActions="true" @itemSwipeProgressStarted="onSwipeStarted">
    <v-template name="incomplete" if="!todo.isComplete">
      <StackLayout class="item">
        <Label :text="todo.title" />
      </StackLayout>
    </v-template>

    <v-template name="complete" if="todo.isComplete">
      <StackLayout class="item item--completed">
        <Label :text="todo.title" />
      </StackLayout>
    </v-template>

    <v-template name="itemswipe">
      <FlexboxLayout>
        <StackLayout
          id="complete-view"
          class="swipe-item complete"
          orientation="horizontal"
          @tap="onCompleteTap"
        >
          <Label text="toggle" />
        </StackLayout>
        <StackLayout
          id="delete-view"
          class="swipe-item remove"
          orientation="horizontal"
          @tap="onRemoveTap"
        >
          <Label text="remove" />
        </StackLayout>
      </FlexboxLayout>
    </v-template>
  </RadListView>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    itemsText() {
      return this.todos.length === 1 ? '1 item left' : `${this.todos.length} items left`
    },
    showComplete() {
      return !!this.todos.find(todo => todo.isComplete)
    },
  },
  methods: {
    onSwipeStarted({ data, object }) {
      const swipeLimits = data.swipeLimits
      const swipeView = object
      const completeItem = swipeView.getViewById('complete-view')
      const removeItem = swipeView.getViewById('delete-view')
      swipeLimits.left = completeItem.getMeasuredWidth() + removeItem.getMeasuredWidth()
      swipeLimits.right = 0
      swipeLimits.threshold = completeItem.getMeasuredWidth()
    },
    onRemoveTap({ object }) {
      const index = this.getIndexFromObject(object)
      this.$emit('removeTodo', index)
    },
    onCompleteTap({ object }) {
      const index = this.getIndexFromObject(object)
      this.$emit('toggleComplete', index)
    },
    getIndexFromObject(object) {
      return this.todos.indexOf(object.bindingContext)
    },
  },
}
</script>

<style native scoped>
.item {
  padding: 30px 20px;
  border-color: black;
  border-bottom-width: 2px;
  border-style: solid;
}

.item--completed {
  color: #fff;
  background-color: lightseagreen;
}

.swipe-item {
  padding: 0 20px;
  color: #fff;
}

.complete {
  background-color: green;
}

.remove {
  background-color: red;
}
</style>
