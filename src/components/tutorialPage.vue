<template>
<div class="content">
    <div v-for="tutorials in tutorials" :key="tutorials.key">
    <div class="splash">
        <h1 class="title">{{ tutorials.Name }}</h1>
        <img class="img" :src="tutorials.imgSplash" />
        <h2 class="titleSub">{{ tutorials.Para1 }}</h2>
    </div>
    <sideBar/>
        <div class="body">
        <h1 class="title2">{{ tutorials.Title1 }}</h1>
        <h2 class="text">{{ tutorials.Para2 }}</h2>
        <iframe :src="tutorials.Code1" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para3 }}</h2>
        <iframe :src="tutorials.Code2" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para4 }}</h2>
        <iframe :src="tutorials.Code3" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para5 }}</h2>
        <iframe :src="tutorials.Code4" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para6 }}</h2>
        <iframe :src="tutorials.Code5" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para7 }}</h2>
        <iframe :src="tutorials.Code6" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para8 }}</h2>
        <iframe :src="tutorials.Code7" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h1 class="title2">{{tutorials.Title2}}</h1>
        <h2 class="text">{{ tutorials.Para9 }}</h2>
        <iframe :src="tutorials.Code8" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para10 }}</h2>
        <iframe :src="tutorials.Code9" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para11 }}</h2>
        <iframe :src="tutorials.Code10" style="width: 100%; height: fit-content" frameborder="0"></iframe>
        <h2 class="text">{{ tutorials.Para12 }}</h2>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import {
    db
} from "../firebaseDb.js";
import sideBar from '../components/sideBar.vue'

export default {
    Name: "tutorialPage",
    components: {
        sideBar,
    },
    data() {
        return {
            tutorials: [],
        };
    },
    created() {
        db.collection("tutorials")
            .where("ID", "==", this.$route.params.id)
            .onSnapshot((snapshotChange) => {
                this.tutorials = [];
                snapshotChange.forEach((doc) => {
                    this.tutorials.push({
                        key: doc.id,
                        Name: doc.data().name,
                        Thumb: doc.data().thumb,
                        imgSplash: doc.data().imgSplash,
                        Code1: doc.data().code1,
                        Code2: doc.data().code2,
                        Code3: doc.data().code3,
                        Code4: doc.data().code4,
                        Code5: doc.data().code5,
                        Code6: doc.data().code6,
                        Code7: doc.data().code7,
                        Code8: doc.data().code8,
                        Code9: doc.data().code9,
                        Code10: doc.data().code10,
                        Para1: doc.data().para1,
                        Para2: doc.data().para2,
                        Para3: doc.data().para3,
                        Para4: doc.data().para4,
                        Para5: doc.data().para5,
                        Para6: doc.data().para6,
                        Para7: doc.data().para7,
                        Para8: doc.data().para8,
                        Para9: doc.data().para9,
                        Para10: doc.data().para10,
                        Para11: doc.data().para11,
                        Para12: doc.data().para12,
                        Title1: doc.data().title1,
                        Title2: doc.data().title2,
                        ID: doc.data().ID,
                    });
                });
            });
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

.content {
    width: 100%;
    height: fit-content;
    position: relative;
    top: 5vh;
    font-weight: 300;
}

.splash{
    background-color: #1A0CB2;
}

.img{
    width: 25vw;
    border-radius: 50px;
}

.titleSub{
    width:50vw;
    color: #fff;
    position: relative;
    margin: 0 auto;
    padding: 5vh;
}

.title {
    margin: 0 auto;
    padding: 5vh 5vh ;
    width: 50vw;
    font-size: 4em;
    color: #fff;
    font-family: 'Oswald', sans-serif;
}

.title2{
  font-size: 4em;
  color: #270FFF;
}

.text{
  font-weight: 700;
  font-size: 2em;
  padding: 25px;
  line-height: 1.5;
  color: #000;
}

.body{
  width: 50vw;
  margin: 0 auto;
  font-weight: 100;
  position: relative;
bottom: 50vh;
}

@media only screen and (min-width: 768px) {
  /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
  /* phones */
  .title{
      font-size: 3em;
  }

  .img{
      width: 70vw;
  }

  .main{
      display: none;
  }

  .body{
      bottom: 0;
      width: 70vw;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
