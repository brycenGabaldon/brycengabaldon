import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {

    apiKey: "AIzaSyDRLi462ByrGstMvxB_l372RXP6IoqAVJE",
  
    authDomain: "brycengabaldon-41bc3.firebaseapp.com",
  
    projectId: "brycengabaldon-41bc3",
  
    storageBucket: "brycengabaldon-41bc3.appspot.com",
  
    messagingSenderId: "773766685109",
  
    appId: "1:773766685109:web:b87532d612774d8f8f79fc",
  
    measurementId: "G-7FKH6J1MHL"
  
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};

