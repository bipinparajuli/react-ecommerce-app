import firebase from 'firebase'

const Firebase =firebase.initializeApp({
        apiKey: "AIzaSyDqhedvMELzLBm99K2tKzPH-Zd6tMmgYds",
        authDomain: "e-commerce-app-b19e5.firebaseapp.com",
        databaseURL: "https://e-commerce-app-b19e5.firebaseio.com",
        projectId: "e-commerce-app-b19e5",
        storageBucket: "e-commerce-app-b19e5.appspot.com",
        messagingSenderId: "1047553957625",
        appId: "1:1047553957625:web:38a8a8970cb8b24cc74c28",
        measurementId: "G-M88QH9VG4E"

})

const auth=firebase.auth()
const storage=firebase.storage()
export {auth,storage}