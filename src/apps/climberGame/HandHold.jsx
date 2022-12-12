import React, { useState, useEffect } from "react";



const HandHold = ({className, color, index}) => {
const colors1 = (index*2+100)%255
const colors2 = (index*3+200)%255

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

console.log(seconds)
  useEffect(() => {
    const move = setInterval(() => {
      setXP((xP) => Math.floor(1 + Math.random() * 1000));//spacing
    },[setTimer]);//rerender

    return () => clearInterval(move);
  }, []);


console.log(index)
  return (
    <div 
onClick={()=>setActive(!isActive)}
style={{left:xP, background: "radial-gradient(rgb("  +colors2+  ", "+colors1+", "+index+"),rgb("  +colors1+  ", "+index+", "+colors2+"))"}}

className={!isActive ? "handHold" : "handHold2"}
 setActive={setActive}
    ></div>
  );
};

export default HandHold;

