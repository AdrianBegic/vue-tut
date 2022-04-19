<template>
  <div class="main">
  <h1 class="title"> Author</h1>
  <img class="image-pro" src="../assets/profile.png">
  <h2 class="content"> Adrian Begic-Jovanovic</h2>
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
</template>

<script>
/* eslint-disable */
export default {
  name: "sideBar",
 
};
</script>

<style scoped>


.main {
  position: sticky;
  width: 15vw;
  background-color: #270FFF;
  height: 45vh;
  top: 30vh;
  left: 80vw;
  border-radius: 10px;
}

.title{
    color: #fff;
    padding: 10px;
}

.image-pro{
    width: 50%;
    border-radius: 400px;
}

.content{
    color: #fff;
    font-weight: 100;
}

.image{
    width: 20vw;
    border-radius: 500px;
  }

  .image-link{
    width: 20%;
    cursor: pointer;
  }

  .image-link:hover{
    opacity: .7;
  }
</style>
