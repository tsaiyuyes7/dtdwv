import firebase from "firebase/app";
import "firebase/firestore"

let config = {
    apiKey: "AIzaSyBFVgP1ni8D0ndv_JJlpeBYyZqlT0Wvw8U",
  authDomain: "firebang-944f6.firebaseapp.com",
  databaseURL: "https://firebang-944f6.firebaseio.com",
  projectId: "firebang-944f6",
  storageBucket: "firebang-944f6.appspot.com",
  messagingSenderId: "71707594934",
  appId: "1:71707594934:web:2c891598125bf17b"
};
firebase.initializeApp(config);

window.firebase = firebase;

export const db = firebase.firestore()