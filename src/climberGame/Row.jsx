
import React, {useState, useEffect} from "react";
import HandHold from "./HandHold";





const Row = ({position, onClick, timers, className, index}) => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 3);
      
       
      }, 4000);
      setSeconds(seconds)
      return () => clearInterval(interval);
    },);





  return (
    
    <div 
    className={ className}
    style=


{{position:"relative", top:position*1}} >
     
       
            <HandHold onclick={onClick} 
    
          
            />
     
    </div>
  );
};

export default Row;
