import React from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";

import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import App from "../App";

const Loading = () => {


  const user = auth.currentUser == null ? "guest" : auth.currentUser.displayName
  const  [viewUser, setViewUser] = useState("");
  const [url, setUrl] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [youtube, setYoutube] = useState("");
  const [loaded, setLoaded] = useState(false);
const loaded2 = displayName !== "" ? true : false



  const settingsRef = collection(db, "Users");


  const getUser = async () => {  
    const q =query(
          settingsRef,
          where("displayName", "==", user),
          orderBy("created", "desc"),
          limit(1)
        );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setViewUser(doc.data().viewUser);
      console.log("getUser running")
      getUrl();
    });
  };
  const q2 =  query(
    settingsRef,
    where("displayName", "==", viewUser),
    orderBy("created", "desc"),
    limit(1)
  );


  const getUrl = async () => {

 
    console.log("geturl running")
    const querySnapshot = await getDocs(q2)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setBackgroundUrl(doc.data().backgroundUrl)
      setDisplayName(doc.data().displayName)
      setEmail(doc.data().email)
      setInstagram(doc.data().instagram)
      setYoutube(doc.data().youtube)
      setPhoneNumber(doc.data().phoneNumber)
      setUrl(doc.data().url)
      setBackground(doc.data().background)


    });
  };

      const toggleLoaded = (value) => {

        setLoaded(value);
loaded === false && getUser();
loaded === false && getUrl();
loaded === false && setLoaded(true)   
    }
  useEffect(() => {
toggleLoaded()


    const interval = setInterval(() => {

displayName===""&& toggleLoaded(false)


    }, 1000);
    return () => clearInterval(interval);
  },);
  

  return (

    
    <App
      instagram={instagram}
      youtube={youtube}
      phoneNumber={phoneNumber}
      url={url}
      backgroundUrl={backgroundUrl}
      displayName={displayName}
      viewUser={viewUser}
      email={email}
      user={user}
      toggleLoaded={toggleLoaded}
      background= {background}
loaded={loaded2}
     
    />
  );
};


export default Loading;