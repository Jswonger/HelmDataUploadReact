import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBuSC-DdHf2Rqz7A9EogT4qKOt3t5M-DJw",
  authDomain: "my-example-proj-2fea9.firebaseapp.com",
  databaseURL: "https://my-example-proj-2fea9.firebaseio.com",
  projectId: "my-example-proj-2fea9",
  storageBucket: "my-example-proj-2fea9.appspot.com",
  messagingSenderId: "382587075246",
  appId: "1:382587075246:web:930451f967c7992dcccb3f",
  measurementId: "G-41W72H3JDK"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase 