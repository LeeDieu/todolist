<template>
  <ul class="todo-main">
    <MyItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  props: ["todos", "checkTodo","deleteTodo"],
  components: {
    MyItem,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 2px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 2px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
