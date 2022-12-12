

import React from "react";
import "../AppStyles.scss"
import { useState, useEffect } from "react";
import { db, auth} from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy, limit
} from "firebase/firestore";


const Instagram = () => {


const [viewUser, setViewUser] = useState("BrycenG")
  const [url, setUrl] = useState("");
  const [loaded, setLoaded] = useState(false)




const settingsRef = collection(db, "Users");
const q = query(settingsRef, where("displayName", "==", auth.currentUser.displayName), orderBy("created", "desc"), limit(1));
const getUser = async()=>{

  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
  setViewUser(doc.data().viewUser);


});
}
const q2 = query(settingsRef, where("displayName", "==", viewUser), orderBy("created", "desc"), limit(1));
const getUrl = async()=>{

  const querySnapshot = await getDocs(q2);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
  setUrl(doc.data().instagram);


});
}


        useEffect(() => {

          const interval = setInterval(() => {
              !loaded &&  
            getUrl();
            setLoaded(true)
     

    
           
          }, 1000);
          return () => clearInterval(interval);
    
        },);
 
    return (
      <div className="DiscordView">
        <button onClick={()=>setLoaded(!loaded)} style={{width: "100%", float: "right", background: "rgb(75,75,75)", color: "white"}}>Reload</button>
        
{loaded && [<iframe title="instagram" src={url} style={{width:"100%", height:"100%", overflow: "auto"}} frameBorder="0" allowtransparency="true"></iframe>]}
<div > not loaded </div>

        </div>
 
    );
  };

  export default Instagram;