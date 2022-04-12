<template>
<div class="content">
<div v-for="tutorials in tutorials" :key="tutorials.key">
<h1 class="title">{{tutorials.Name}}</h1>
<img :src="tutorials.imgSplash">
<h1>{{tutorials.Para1}}</h1>
<iframe :src="tutorials.Code1" style="width: 80%; height: 300px;" frameborder="0"></iframe>
<h1>{{tutorials.Para3}}</h1>
</div>
</div>
</template>

<script>
/* eslint-disable */
import { db } from "../firebaseDb.js";

export default {
  Name: "tutorialPage",
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
          Para1: doc.data().para1,
          Code1: doc.data().code1,
          Para2: doc.data().para2,
          Para3: doc.data().para3,
          ID: doc.data().ID,
        });
      });
    });
  },
};
</script>

<style>
.content{
    width: 100%;
    height: fit-content;
    position: relative;
    top: 5vh;
}

.title{
    font-size: 4em;
}
</style>
