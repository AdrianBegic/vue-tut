<template>

<div class="splash">
<div class="thumbs">
<tutorialThumb/>
</div>
</div>
</template>

<script>
import tutorialThumb from '../components/tutorialThumb.vue'

export default {
  name: 'Tutorial',
  components: {
    tutorialThumb
  }
}
</script>

<style>
  .splash{
    width: 100%;
    height: 100vh;
  }

  .thumbs{
      width: auto;
      padding: 10em 100px;
  }
</style>
