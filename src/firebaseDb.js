/* eslint-disable */
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBMBlK0w2hfTqSmx9XGFJ2lET3LK1yvQIA",

  authDomain: "vue-tutorial-334bc.firebaseapp.com",

  projectId: "vue-tutorial-334bc",

  storageBucket: "vue-tutorial-334bc.appspot.com",

  messagingSenderId: "462928465633",

  appId: "1:462928465633:web:69f5fcafaa96f3fc7ef1a0",

  measurementId: "G-8CY7BD61HT"


}

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

export const db = firebaseApp.firestore();