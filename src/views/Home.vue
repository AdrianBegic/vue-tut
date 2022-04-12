<template>

<div class="splash">
<div class="container">
<Box/>
</div>
</div>
<div class="splash">
<BoxTwo/>
</div>
</template>

<script>
import Box from '../components/box.vue'
import BoxTwo from '../components/boxTwo.vue'

export default {
  name: 'Home',
  components: {
    Box,
    BoxTwo
  }
}
</script>

<style>

  .splash{
    width: 100%;
    height: 100vh;
  }
</style>
