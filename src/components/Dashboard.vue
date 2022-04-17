<template>
  <div class="main">
    <div class="form">
      <form action="#">
      <p><input type="text" value-size="40" v-model="newTut.name" placeholder="name" /></p>
        <p><input type="text" value-size="40" v-model="newTut.ID" placeholder="ID" /></p>
        <p><input type="text" value-size="40" v-model="newTut.imgSplash" placeholder="imgSplash" /></p>
        <p><input type="text" value-size="40" v-model="newTut.thumb" placeholder="thumb" /></p>
        <p><textarea v-model="newTut.para1" placeholder="para1"></textarea></p>
        <p><textarea  v-model="newTut.title1" placeholder="title1"></textarea></p>
        <p><textarea  v-model="newTut.para2" placeholder="para2"></textarea></p>
        <p><textarea  v-model="newTut.code1" placeholder="code1"></textarea></p>
        <p><textarea  v-model="newTut.para3" placeholder="para3"></textarea></p>
        <p><textarea  v-model="newTut.code2" placeholder="code2"></textarea></p>
        <p><textarea  v-model="newTut.para4" placeholder="para4"></textarea></p>
        <p><textarea  v-model="newTut.code3" placeholder="code3"></textarea></p>
        <p><textarea  v-model="newTut.para5" placeholder="para5"></textarea></p>
        <p><textarea  v-model="newTut.code4" placeholder="code4"></textarea></p>
        <p><textarea v-model="newTut.para6"  placeholder="para6"></textarea></p>
        <p><textarea  v-model="newTut.code5" placeholder="code5"></textarea></p>
        <p><textarea  v-model="newTut.para7" placeholder="para7"></textarea></p>
        <p><textarea  v-model="newTut.code6" placeholder="code6"></textarea></p>
        <p><textarea  v-model="newTut.para8" placeholder="para8"></textarea></p>
        <p><textarea  v-model="newTut.code7" placeholder="code7"></textarea></p>
        <p><textarea  v-model="newTut.title2" placeholder="title2"></textarea></p>
        <p><textarea  v-model="newTut.para9" placeholder="para9"></textarea></p>
        <p><textarea  v-model="newTut.code8" placeholder="code8"></textarea></p>
        <p><textarea  v-model="newTut.para10" placeholder="para10"></textarea></p>
        <p><textarea  v-model="newTut.code9" placeholder="code9"></textarea></p>
        <p><textarea  v-model="newTut.para11" placeholder="para11"></textarea></p>
        <p><textarea  v-model="newTut.code10" placeholder="code10"></textarea></p>
        <p><textarea v-model="newTut.para12"  placeholder="para12"></textarea></p>
        <a @click="create">PUBLISH</a>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import firebase from "firebase";
import { doc, setDoc } from "firebase/firestore"; 
import {
    db
} from "../firebaseDb.js";

export default {
  name: "Dashboard",
  data() {
        return {
            tutorials: [],
            newTut: {
              name: '',
              ID: '',
              imgSplash: '',
              thumb: '',
              title1: '',
              title2: '',
              code1: '',
              code2: '',
              code3: '',
              code4: '',
              code5: '',
              code6: '',
              code7: '',
              code8: '',
              code9: '',
              para1: '',
              para2: '',
              para3: '',
              para4: '',
              para5: '',
              para6: '',
              para7: '',
              para8: '',
              para9: '',
              para10: '',
              para11: '',
              para12: '',
            }
        };
    },
  methods: {

   async create(){
  await db.collection('tutorials').add({
    newTut: this.newTut
});
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
.main{
  height: auto;
  position: relative;
  top: 5em;
  padding-bottom: 5vh;
}
p{
  margin: 0;
  padding: 10px;
}

textarea, input{
  width: 50vw;
  height: 10vh;
  font-size: 1em;
}
input{
  height: 5vh;
}
  a{
    cursor: pointer;
    font-size: 3em;
    border: 2px solid #000;
    border-radius: 5px;
  }

  a:hover{
    background-color: #000;
    color: #fff;
  }
</style>
