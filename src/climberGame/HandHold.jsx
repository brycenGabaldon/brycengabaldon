import React, { useState, useEffect } from "react";



const HandHold = ({className, color, index}) => {


const setTimer = 5000
  const [seconds, setSeconds] = useState(0);
  const [xP, setXP] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [setTimer]);


  useEffect(() => {
    const move = setInterval(() => {
      setXP((xP) => Math.floor(1 + Math.random() * 1000));//spacing
    },[setTimer]);//rerender

    return () => clearInterval(move);
  }, []);

  console.log(seconds)
  console.log("index")

  return (
    <div 
onClick={()=>setActive(!isActive)}
style={{left:xP, background: "radial-gradient(rgba(255, 255, 255,.5),rgb("  +index+  ", "+index+", "+index+")) "}}

className={!isActive ? "handHold" : "handHold2"}
 setActive={setActive}
    ></div>
  );
};

export default HandHold;

