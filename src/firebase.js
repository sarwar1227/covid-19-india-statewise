import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBP0F5ZqgEBkiheGGOs1i0-BGHma4-I95A",
    authDomain: "covid-19-india-statewise.firebaseapp.com",
    projectId: "covid-19-india-statewise",
    storageBucket: "covid-19-india-statewise.appspot.com",
    messagingSenderId: "901977153207",
    appId: "1:901977153207:web:72aa343100160e7230f732",
    measurementId: "G-W7MLQ0SEWM"
})

const db = firebaseApp.firestore();

export default db;
