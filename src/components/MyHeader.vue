<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
export default {
    name:'MyHeader',
    data() {
      return {
        title:""
      }
    },
    methods:{
      add(){
        console.log(this.title)
      }
    }
}
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
  }
  .todo-header input:focus{
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.075),0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>