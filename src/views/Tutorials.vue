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

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
  /* phones */
  .thumbs{
    padding: 2em;
  }

  .title{
    font-size: 3em;
    margin-bottom: 2em;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
