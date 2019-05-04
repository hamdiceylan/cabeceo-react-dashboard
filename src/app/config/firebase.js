import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "************************************",
    authDomain: "************************************",
    databaseURL: "************************************",
    projectId: "************************************",
    storageBucket: "************************************",
    messagingSenderId: "************************************",
};


firebase.initializeApp(firebaseConfig);

export default firebase;