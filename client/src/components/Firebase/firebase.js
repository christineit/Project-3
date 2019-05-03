import app from "firebase/app";
import "firebase/auth";
// var keys = require("../../keys");
// const dotenv = require("dotenv").config();

const config = {
  apiKey: "AIzaSyA021NLOC0l3fMaFm1tdLtLTwMXogPCOJM",
  authDomain: "project-3-70e4f.firebaseapp.com",
  databaseURL: "https://project-3-70e4f.firebaseio.com",
  projectId: "project-3-70e4f",
  storageBucket: "project-3-70e4f.appspot.com",
  messagingSenderId: "646046413766"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
