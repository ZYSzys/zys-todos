<template>
  <div id="app">
    <img src="./assets/zyszys.png">
    <h1>{{ title }}</h1>
    
    <ul>
    	<li v-for='(todo, index) in todos':id='index' v-bind:class="{'checked': todo.done}">
    		<label><input type="checkbox">{{ index + 1 }}.{{ todo.value }}</label>
    	</li>
    </ul>
    <!--
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
  </div>
</template>

<script>
//import './assets/todos.less'
export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
      {value: 'Read a front-end book', done: false},
      {value: 'Complete the code', done: true},
      {value: 'Write a codepen', done: false}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  line-height: 300%;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.checked {
  color: grey;
  text-decoration: line-through;
}
</style>
