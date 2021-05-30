import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtEDCSFYOrBIRQPkgwRoRyYO-Nh7bSt20",
  authDomain: "tiecoura-01.firebaseapp.com",
  databaseURL: "https://tiecoura-01-default-rtdb.firebaseio.com",
  projectId: "tiecoura-01",
  storageBucket: "tiecoura-01.appspot.com",
  messagingSenderId: "35805829651",
  appId: "1:35805829651:web:a455c2121c0d547034fde6",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const fs = app.firestore()
export const sr = app.storage()
export const func = app.functions()
