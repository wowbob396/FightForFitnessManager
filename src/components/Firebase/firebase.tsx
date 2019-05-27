import app from 'firebase/app';
import React from 'react';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAmTq4-KRemuMEDTDCpTy6WKJzq-D8867A",
    authDomain: "fightforfitnessflutter.firebaseapp.com",
    databaseURL: "https://fightforfitnessflutter.firebaseio.com",
    projectId: "fightforfitnessflutter",
    storageBucket: "fightforfitnessflutter.appspot.com",
    messagingSenderId: "1008445354039",
    appId: "1:1008445354039:web:80d1bddacf7e32b3"
  };

  class Firebase {
      private auth;
      constructor() {
          app.initializeApp(firebaseConfig);
          this.auth = app.auth();
      }

      public doCreateUserWithEmailAndPassword = (email, password) => {
          this.auth.createUserWithEmailAndPassword(email,password);
      }

      public doSignInWithEmailAndPassword = (email, password) => {
          this.auth.signInWithEmailAndPassword(email,password);
      }

      public doSignOut = () => this.auth.signOut();

      public doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  }

const FirebaseContext = React.createContext(null);  

export default Firebase;

export { FirebaseContext }; 