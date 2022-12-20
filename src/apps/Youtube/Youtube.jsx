

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


const Youtube = () => {


const [viewUser, setViewUser] = useState("")
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
getUser();
  const querySnapshot = await getDocs(q2);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
  setUrl(doc.data().youtube);
  console.log("got Youtube")
  console.log(url)


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
        
{loaded && [<iframe width="100%" height="100%" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]}
<div > Loading... </div>

        </div>
 
    );
  };

  export default Youtube;