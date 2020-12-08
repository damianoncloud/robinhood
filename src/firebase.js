import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_PhwH23K04JQE2MBy8myW2-IRzLKjRG8",
    authDomain: "robinhood-e2ffb.firebaseapp.com",
    projectId: "robinhood-e2ffb",
    storageBucket: "robinhood-e2ffb.appspot.com",
    messagingSenderId: "95932186928",
    appId: "1:95932186928:web:9446946f72a940a2c4c8f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
