import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCKpT4L6vpN5lnekkm-ugOmAqOut-ECjw",
  authDomain: "services-demo-b4840.firebaseapp.com",
  databaseURL: "https://services-demo-b4840.firebaseio.com",
  projectId: "services-demo-b4840",
  storageBucket: "services-demo-b4840.appspot.com",
  messagingSenderId: "702990738562",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  /** Get User */
  getCurrentUser = cb => this.auth.onAuthStateChanged(cb);

  /** Create User */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
