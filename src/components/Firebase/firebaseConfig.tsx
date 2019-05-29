import app from 'firebase/app';
import 'firebase/firestore';

const FirebaseApp = app.initializeApp({
    apiKey: "AIzaSyAmTq4-KRemuMEDTDCpTy6WKJzq-D8867A",
    authDomain: "fightforfitnessflutter.firebaseapp.com",
    databaseURL: "https://fightforfitnessflutter.firebaseio.com",
    projectId: "fightforfitnessflutter",
    storageBucket: "fightforfitnessflutter.appspot.com",
    messagingSenderId: "1008445354039",
    appId: "1:1008445354039:web:80d1bddacf7e32b3"
  });

const databaseRef = FirebaseApp.firestore();
const announcementCollection = databaseRef.collection("announcements");


announcementCollection.get().then(
  snapshot => {
      console.log(snapshot.docs[0].data());
  }
);

export default FirebaseApp;
export { announcementCollection };