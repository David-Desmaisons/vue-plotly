<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Ploty msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Ploty from '@/components/Ploty.vue'

export default {
  name: 'app',
  components: {
    Ploty
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
