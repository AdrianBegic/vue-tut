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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
*{
font-family: 'Oswald', sans-serif;
}

a {
  text-decoration: inherit;
}

body{
  margin:0;
  background-color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #270FFF;
  margin: 0;
  width: auto;
}

</style>
