<template>
<Nav/>
  <router-view/>
</template>

<script>
import Nav from './components/nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>
body{
  margin:0;
  background-color: #FFF4DA;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
}

</style>
