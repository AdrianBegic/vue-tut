<template>
  <div id="container">
    <div id="content" v-for="tutorials in tutorials" :key="tutorials.key">
      <router-link
        :to="{ name: 'tutorialPage', params: { id: tutorials.ID } }"
        style="color: inherit"
      >
        <img :src="tutorials.Thumb" alt="avatar" id="thumb" />
        <h1 class="name">{{ tutorials.Name }} ❯</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { db } from "../firebaseDb.js";

export default {
  Name: "tutorialThumb",
  data() {
    return {
      tutorials: [],
    };
  },
  created() {
    db.collection("tutorials").onSnapshot((snapshotChange) => {
      this.tutorials = [];
      snapshotChange.forEach((doc) => {
        this.tutorials.push({
          key: doc.id,
          Name: doc.data().name,
          Thumb: doc.data().thumb,
          ID: doc.data().ID,
        });
      });
    });
  },
};
</script>

<style>
#container {
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  height: fit-content;
}


#content {
  margin: 20px;
  background-color: #fff;
  color: #2F1728;
  width: 500px;
  height: fit-content;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  border: solid 4px #2F1728;
  -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}

#content:hover{
  background: #FE6B71;
  border: solid 4px #FE6B71;
}

#thumb {
  background: rgb(254,107,113);
background: radial-gradient(circle, rgba(254,107,113,1) 0%, rgba(47,23,40,1) 82%);
  width: 100%;
  height: 100%;
}

.name{
  padding: 10px;
}
</style>
