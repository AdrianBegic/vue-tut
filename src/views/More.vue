<template>
<div class="splash">
<h1 class="title"> About Writer</h1>
<div class="content">
<img class="image" src="../assets/profile.png">
<p class="para"> My name is Adrian, I am from Toronto , ON. I have found a passion for wanting to help new developers and all developers a like break into new technology.
This tutorial website is where I hope to write about all means of topics, including Vue, Nuxt, Jest, Github, Publishing and much more.</p>
<h2> Check Out My Links </h2>
<a href="https://github.com/AdrianBegic">
<img class="image-link" href="" src="../assets/25231.png">
</a>
<a href="https://www.npmjs.com/~adrian_446">
<img class="image-link" href="" src="../assets/npm-logo.png">
</a>
<a href="https://www.linkedin.com/in/adrian-begic-jovanovic-452a45219">
<img class="image-link" src="../assets/linkedin.png">
 </a>
</div>
</div>
</template>

<script>

export default {
  name: 'More'
}
</script>

<style scoped>
.title{
  width: 100%;
  font-size: 4em;
  margin: 0 auto;
  position: relative;
  top: 10vh;
}

  .splash{
    width: 100%;
    height: 100vh;
  }

  .content{
      width: auto;
      padding: 10em 100px;
  }

  .image{
    width: 20vw;
    border-radius: 500px;
  }

  .image-link{
    width: 10vw;
    padding: 30px;
    cursor: pointer;
  }

  .image-link:hover{
    opacity: .7;
  }

  .para{
    width: 40vw;
    margin: 0 auto;
    font-size: 2em;
    padding: 20px;
  }

  @media only screen and (min-width: 768px) {
  /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
  /* phones */
  .content{
    padding: 0;
    width: 100%;
    position: relative;
    top: 7em;
  }

  .para{
    margin: 0 auto;
    width: 90%;
    padding: 1em 0;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
