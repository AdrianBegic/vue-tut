<template>
<h1 class="title">TUTORIALS</h1>
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

<style scoped>
.box {
  background-color: inherit;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
}

.title{
  width: 100%;
  font-size: 4em;
  text-decoration: underline;
}
</style>
