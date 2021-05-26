import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBzPfHORZM_oPzG2Qoah1i-rq1_COvJQoY",
    authDomain: "music-166fc.firebaseapp.com",
    projectId: "music-166fc",
    storageBucket: "music-166fc.appspot.com",
    appId: "1:865952233268:web:386a44cd2911c29284d761"
};
  
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection
};
