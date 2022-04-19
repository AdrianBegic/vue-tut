<template>
<h1 class="title"> ALL TUTORIALS</h1>
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

<style scoped>
  .splash{
    width: 100%;
    height: auto;
  }

  .thumbs{
      width: auto;
      padding: 10em 100px;
  }

  .title{
  width: 100%;
  font-size: 4em;
  margin: 0 auto;
  position: relative;
  top: 10vh;
}
</style>
