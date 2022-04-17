<template>
<Nav/>
  <transition name="fade" mode="out-in">
  <router-view></router-view>
  </transition>
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
  background-color: #fff;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
