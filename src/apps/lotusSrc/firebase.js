import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {

    const firebaseConfig = {

        apiKey: "AIzaSyCc9ifHQBqr9frO1Ip296uWx9mwgjEBZ3M",
      
        authDomain: "lotuscleaningco.firebaseapp.com",
      
        projectId: "lotuscleaningco",
      
        storageBucket: "lotuscleaningco.appspot.com",
      
        messagingSenderId: "286685133457",
      
        appId: "1:286685133457:web:5fcb32aaa272932d5f5d30"
      
  
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

