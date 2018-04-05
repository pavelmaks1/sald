import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAT3gwCrYWAHMpgKOEyjs5Oxi8hNlr2nD8",
  authDomain: "sald-1c580.firebaseapp.com",
  databaseURL: "https://sald-1c580.firebaseio.com",
  projectId: "sald-1c580",
  storageBucket: "",
  messagingSenderId: "315680125153"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
