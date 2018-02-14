import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyACIaWkpy4Q30GV5KCdIiRz1iypJzUsW0c",
    authDomain: "these-days.firebaseapp.com",
    databaseURL: "https://these-days.firebaseio.com",
    projectId: "these-days",
    storageBucket: "these-days.appspot.com",
    messagingSenderId: "903405671845"
  };
var fire = firebase.initializeApp(config);
export default fire;