<template>
<div class="box">
<tutorialThumb/>
</div>
</template>

<script>
import tutorialThumb from '../components/tutorialThumb.vue'

export default {
  name: 'BoxTwo',
  components: {
    tutorialThumb
  }
}
</script>

<style>
.box {
  background-color: inherit;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  padding-top:5vh;
  border-radius: 5px;
  display: flex;
}
</style>
