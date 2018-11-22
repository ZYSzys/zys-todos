<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li>
        <input v-model="newTodo" @keyup.13="addItem" placeholder="Write" autofocus="true">
      </li>
      <li v-for="(todo,index) in todos" :class="{'checked':todo.done}">
        <input type="checkbox" @change="saveToStore" v-model="todo.done">
        <label>{{index+1}}.{{todo.value}}</label>
        <time>{{todo.created | date}}</time>
        <button @click.prevent="delItem(todo)"></button>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import './assets/todos.less'
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  moment.locale('zh-cn')

  export default {
    name: 'app',
    data() {
      return {
        newTodo: '',
        title: 'zys-todos',
        todos: []
      }
    },
    created() {
      if(this.is_initialized) {
        this.todos = JSON.parse(localStorage.getItem('ZYS-TODOS'))
      }
    },
    computed: {
      is_initialized() {
        return localStorage.getItem('ZYS-TODOS') != null
      }
    },
    filters: {
      date(val) {
        return moment(val).calendar()
      }
    },
    methods: {
      addItem() {
        this.todos.push({
          value: this.newTodo,
          created: Date.now(),
          done: false
        });
        this.saveToStore();
        this.newTodo = ''
      },
      delItem(todo) {
        this.todos = this.todos.filter((x) => x !== todo)
        this.saveToStore()
      },
      saveToStore() {
        localStorage.setItem('ZYS-TODOS', JSON.stringify(this.todos))
      }
    }
  }
</script>