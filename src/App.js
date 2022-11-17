import React, { useEffect} from "react";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons"
import "./components/IconStyle.scss"
import TaskManager from "./taskManager/TaskManager";
import ImageUpload from "./ImageUpload";
import FB from "./fbApp";




export default function App() {


  
  const [isActive, setIsActive] = React.useState({first: false, second: false});


  const onClick = () => {
setIsActive({...isActive, second: true});
    console.log("did something")

}
useEffect( () => { console.log(isActive); }, [isActive] )


  console.log("app is Open");
  return (
    <>
      <div className="App" key={Math.floor(1 + Math.random() * 10000)}>
        <div
          className="ClockBanner"
          key={Math.floor(1 + Math.random() * 10000)}
        >
          <Clock />
        </div>

          <div className="folders" > 
            <FolderStatus  isActive={isActive} 
            onClick={()=>onClick("id")}
            handleClick={onClick}  key={Math.floor(1 + Math.random() * 10000)} />
          </div>
   



            <div>
            <FolderStatus 
        isActive1={isActive} onClick={()=>onClick("id")}  handleClick={onClick} key={Math.floor(1 + Math.random() * 10000)}/>
            </div>
            <div className="taskmanager"><TaskManager /></div>
    <div className="login">     
<FB /></div> 

           
       
      </div>
      <div>
<ImageUpload />
        <DockIcons />
      </div> 
    </>
  );
}