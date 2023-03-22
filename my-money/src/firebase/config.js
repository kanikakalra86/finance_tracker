import firebase from 'firebase/app'
import 'firebase/firestore'
import'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJlPF_gNNMde33ahjDVATQdGfAT2Th1ws",
    authDomain: "mymoney-5a1b9.firebaseapp.com",
    projectId: "mymoney-5a1b9",
    storageBucket: "mymoney-5a1b9.appspot.com",
    messagingSenderId: "945757482062",
    appId: "1:945757482062:web:67a3c9f437415369de271f"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp =firebase.firestore.Timestamp

export { projectFirestore ,projectAuth,timestamp}