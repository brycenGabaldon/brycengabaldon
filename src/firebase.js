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
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

