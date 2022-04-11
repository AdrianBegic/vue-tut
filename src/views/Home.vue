<template>
<div class="splash">
<div class="container">
<Box/>
</div>
</div>
</template>

<script>
import Box from '../components/box.vue'

export default {
  name: 'Home',
  components: {
    Box
  }
}
</script>

<style>
  .splash{
    width: 100vw;
    height: 100vh;
  }
</style>
