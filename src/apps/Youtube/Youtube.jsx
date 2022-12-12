

import React from "react";
import "../AppStyles.scss"
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy
} from "firebase/firestore";




const Youtube = () => {

  const user = auth.currentUser === null ? "guest" : auth.currentUser.email;

  const [url, setUrl] = useState("https://www.youtube.com/embed/videoseries?list=PLLY5dnxMW-q2xebdvfab4Nog-aVVrgHBM");
  const [loaded, setLoaded] = useState(false)




const settingsRef = collection(db, user);
const q = query(settingsRef, where("Setting", "==", "Youtube",), orderBy("created", "asc"));
const getUrl = async()=>{

  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
  setUrl(doc.data().url);
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