<template>
  <ul class="todo-main">
  <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" />
 
  </ul>
</template>

<script >
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{
        MyItem
    },
    data() {
      return {
        todos:[
          {id:'001',title:'吃饭',done:true},
          {id:'002',title:'睡觉',done:false},
          {id:'003',title:'打游戏',done:true},
        ]
      }
    },
}
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border:2px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 2px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>