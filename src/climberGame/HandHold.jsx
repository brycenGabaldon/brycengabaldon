import React, { useState, useEffect } from "react";



const HandHold = ({className}) => {

  const [seconds, setSeconds] = useState(0);
  const [xP, setXP] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [seconds]);


  useEffect(() => {
    const move = setInterval(() => {
      setXP((xP) => Math.floor(1 + Math.random() * 10000));//spacing
    },[5000]);//rerender

    return () => clearInterval(move);
  }, [xP]);

  

  return (
    <div 
onClick={()=>setActive(!isActive)}
style={{left:xP}}

className={!isActive ? "handHold" : "handHold2"}
 setActive={setActive}
    ></div>
  );
};

export default HandHold;
