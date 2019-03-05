import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {"<YOUR FIREBASE CONFIGURATION OBJECT>"};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.database = app.database();
  }

  /** Create service */
  createService = (service, userId) =>
    this.database.ref(`${userId}/services/${service.id}`).set(service);

  /** Get all services */
  getServices = (userId, cb) =>
    this.database.ref(`${userId}/services/`).on("value", cb);

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
