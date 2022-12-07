

import React from "react";
import "./Files.scss"
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";



const Youtube = () => {

  const user = auth.currentUser === null ? "guest" : auth.currentUser.email;
  const [tasks, setTasks] = useState([]);
  const [url, setUrl] = useState("https://www.youtube.com/embed/videoseries?list=PLLY5dnxMW-q2xebdvfab4Nog-aVVrgHBM");
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
        const taskColRef = query(
            collection(db, user + "YoutubeSettings/"),
            orderBy("created", "desc")
          ); 
          onSnapshot(taskColRef, (snapshot) => {
            setTasks(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
            setUrl(tasks[0].data.url)
           loaded === false && setLoaded(true)
          });
       
    console.log(loaded)
        }, [tasks,loaded, user]);



        useEffect(() => {
   
          const interval = setInterval(() => {
            setLoaded(true)
     

    
           console.log(loaded)
          }, 1000);
          return () => clearInterval(interval);
    
        },);

 
    return (
      <div className="DiscordView">
        <button onClick={()=>setLoaded(!loaded)} style={{width: "100%", float: "right", background: "rgb(75,75,75)", color: "white"}}>Reload</button>
        
{loaded && [<iframe width="100%" height="100%" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]}
<div > not loaded </div>

        </div>
 
    );
  };

  export default Youtube;