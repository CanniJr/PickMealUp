import firebase from "firebase";

export const userLogin = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
