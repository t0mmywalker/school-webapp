import firebase from 'firebase/app';
import 'firebase/database'; // Importeer de Firebase-database

// Firebase configuratie (vervang met je eigen gegevens)
const firebaseConfig = {
    apiKey: "jouw-api-key",
    authDomain: "school-webapp.firebaseapp.com",
    databaseURL: "https://school-webapp.firebaseio.com",
    projectId: "school-webapp",
    storageBucket: "school-webapp.appspot.com",
    messagingSenderId: "jouw-sender-id",
    appId: "jouw-app-id"
};

// Initialiseer Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
