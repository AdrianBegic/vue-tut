<template>
  <div class='main'>
    <h2>Dashboard</h2>
    <p>This page is only visible to users that are currently logged in</p>
    <button @click="logout">Logout</button>
  </div>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  name: 'Dashboard',
  methods: {
    logout () {
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
