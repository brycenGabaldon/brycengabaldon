import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";

export default function Buttons({
  iconClass,
  label,
  labelClass,
  href,
  buttonClass,

  page,
  isActive,
  folder,
  iconPass,

  style
}){
  const navigate = useNavigate();
console.log( {iconPass})
  const handleSubmit = async () => {
    try {
      isActive &&
console.log(page)
console.log("page")
      navigate(String(page));
      

    } catch (err) {}
  };
  const user = auth.currentUser == null ? "guest" : auth.currentUser.displayName
  const  [viewUser, setViewUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const settingsRef = collection(db, "Users");
  const [loaded, setLoaded] = useState(false);
  const [displayName, setDisplayName] = useState("");
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
      setEmail(doc.data().email)
      setPhoneNumber(doc.data().phoneNumber)
      setDisplayName(doc.data().displayName)


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
      displayName===""&&  console.log(phoneNumber)
displayName===""&& toggleLoaded(false)


    }, 1000);
    return () => clearInterval(interval);
  },);
  

  return (
    <div className={"Spacing"} key={Math.floor(1 + Math.random() * 10000)}>
      <motion.div
        className={buttonClass}
        key={Math.floor(1 + Math.random() * 10000)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=>handleSubmit}

        style={style}
      >


        <a
          target="_blank"
          {...(label === "LinkedIn" ? ' rel="noopener noreferrer" ' : "")}
          {...(href === "PHONE" ? ` href="tel:${phoneNumber}" ` : href = { href })}
        >
        
          <button
            key={Math.floor(1 + Math.random() * 10000)}
            className={iconClass}
            disabled={!isActive}
          ><img className="drop-shadow-lg" style={{borderRadius: '1rem', backgroundSize: "contain",  scale: ".9", }} src={label === "LaRistra "? ["https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac"]  : [ label === "Lotus " ? "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/Screenshot%202022-12-07%20at%2010.04.12%20AM.png?alt=media&token=3e984a42-7150-4d3c-9425-95b937a86c34" : ""] }  alt=""/>
                   {iconPass ? <FaHouseUser color="white" size="100%" /> : ""}
            <div
              className={labelClass}
              key={Math.floor(1 + Math.random() * 10000)}
            >
              {label}
            </div>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

