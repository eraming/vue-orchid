<template>
  <div id="app">
    <navigation/>
    <router-view> </router-view>

  </div>
</template>

<script>
import Navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html { font-size: 14px; }

  body {
  font-family: 'Roboto',
  sans-serif;
  }

 a {
  color: #0094FF;
  text-decoration: none;
    }

a:hover { color: #0074C6; }



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
