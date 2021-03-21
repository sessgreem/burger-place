import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCWj8fjXRMpBtE-lHPsWY2llZwa0X4U_s4",
    authDomain: "react-hooks-3f4f4.firebaseapp.com",
    databaseURL:
        "https://react-hooks-3f4f4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-hooks-3f4f4",
    storageBucket: "react-hooks-3f4f4.appspot.com",
    messagingSenderId: "353445149377",
    appId: "1:353445149377:web:8cb9b360dec9882b55b240",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
