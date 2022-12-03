import React, { useState, useEffect } from 'react';
import "./climber.scss";
import Row from './Row';





const MainGame = () => {
    const [seconds, setSeconds] = useState(0);

const [folder, setFolder ] = useState([1,2,3,4,5,6,7,8,9,10]);




const changeFolder = () => {
    const newFolder = folder.slice(1,400).map((folders) => {
return "" });
  
    setFolder(newFolder);
  };
  

  const handleAdd = (todo) => {
    const newTodos = {...folder};
    newTodos[todo.id] = todo;
    setFolder(newTodos);
  }
  
    useEffect(() => {
   
      const interval = setInterval(() => {
        setSeconds(seconds => seconds+1);
 
        setFolder(prev => [...prev, seconds+1])
      console.log(folder)
      folder.length < 500 && handleAdd()
      folder.length = 500 && changeFolder()

       
      }, .001);
      return () => clearInterval(interval);

    },);

/* const increaseFolder = (index) => {
    const nextFolder = folder.map((c,i) => {
        if (folder[index] >= i ){ console.log("else")
            return folder[i] + 9999;
        }else { console.log("if")
            return folder[i] - 5;
            
        }})} */


console.log("folder")
    return (
        <div className=" wrapper ">
      <div >
       <div className="climbingContainer" >

            {folder.map((item, i) => (

          
            <Row  position={-seconds*5} number={seconds%255} className="live"
         
            />
          ))}


        </div></div></div>
    );
};

export default MainGame;