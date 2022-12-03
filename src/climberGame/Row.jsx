import React, { useState, useEffect } from "react";
import HandHold from "./HandHold";

const Row = ({ position, onClick, timers, className, number, index }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 4000);
    setSeconds(seconds);
    return () => clearInterval(interval);
  }, [seconds]);
  console.log(Number(number))
  console.log("key")

  return (
    <div
      className={className}
      style={{ position: "relative", top: position * 1 }}
    >
      <HandHold index={number} onclick={onClick} />
    </div>
  );
};

export default Row;
