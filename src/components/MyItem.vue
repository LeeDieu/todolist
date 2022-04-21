<template>
  <li>
      <label for="">
        <input type="checkbox" :checked='todo.done'>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>

export default {
    name:'MyItem',
    props:{
      todo:String
    }
    
}
</script>

<style scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 2px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content:initial
  }
  li:last-child{
    border-bottom: none;
  }
</style>