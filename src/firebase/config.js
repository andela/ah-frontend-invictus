import firebase from 'firebase';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDEH8eaow6ysFOOMeIeBHGQ2JcK36qmcvY",
  authDomain: "ah-frontend-invictus.firebaseapp.com",
  databaseURL: "https://ah-frontend-invictus.firebaseio.com",
  projectId: "ah-frontend-invictus",
  storageBucket: "ah-frontend-invictus.appspot.com",
  messagingSenderId: "392895658704",
  appId: "1:392895658704:web:31f5027e1ad995e3"
};

firebase.initializeApp(config);

export default firebase;
