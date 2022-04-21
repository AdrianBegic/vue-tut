<template>
  <div class="box">
    <div class="text-holder">
      <container class="holder">
        <h1 class="title">VUE | NUXT Tutorials And More</h1>
        <router-link class="header__nav-link-1" to="/Tutorials">Tutorials ❯</router-link>
        <router-link class="header__nav-link-2" to="/More">❯ More</router-link>
      </container>
    </div>
    <div class="img-holder">
      <img id="splash" src="../assets/splash.png" />
    </div>
  </div>
</template>

<script>
/* stylelint-disable */
export default {
  name: 'Box',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

#splash {
  height: auto;
  width: 100%;
  vertical-align: middle;
  padding: 10% 0% 10%;
}

p {
  font-size: 1.2em;
}

.box {
  background-color: inherit;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
}

.img-holder {
  position: relative;
  float: right;
  width: 50%;
  height: 100%;
  padding: 0;
  overflow:hidden;
}

.text-holder {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  color: #fff;
  font-weight: 100;
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
}

.holder{
  width: 100%;
}

.title{
  font-family: 'Oswald', sans-serif;
  font-size: 5em;
  float: right;
  width: 100%;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #FCD819;
  font-size: 1em;
}

.header__nav-link-1:hover {
  color: #270FFF;
  background-color: #fff;
}

.header__nav-link-2:hover {
  color: #270FFF;
  background-color: #fff;
}

.header__nav-link-1{
  background-color: #270FFF;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 50px;
  font-weight: 700;
  transition: 0.25s;
  border: solid 1px #270FFF;
}

.header__nav-link-2{
  border: solid 1px #fff;;
  padding: 10px 30px;
  color: #fff;
  border-radius: 5px;
  font-weight: 700;
  transition: 0.25s;
}

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
  .content {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 767px) {
  /* phones */
  .box {
    height: auto;
    width: 100%;
    border-radius: 0px;
    vertical-align: middle;
    display: inline;
  }

  p {
    font-size: 1.2em;
  }

  .text-holder {
    float: left;
    margin-right: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .img-holder {
    display: none;
  }

  .header__nav-link-1{
  margin: 0 auto;
  margin-right: 20px;
  }

  #splash {
    display: none;
  }

  .content {
    font-size: 1.4em;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
