import React, { useState} from "react";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons"
import "./components/IconStyle.scss"
import TaskManager from "./taskManager/TaskManager";
import ImageUpload from "./ImageUpload";
import FB from "./fbApp";
import { Route, Routes } from "react-router-dom";
import Home from "./fbcomponents/Home";
import Images from "./Images";




export default function App() {


  
  const [isActive, setIsActive] = useState(false);


/*   const onClick = () => {
setIsActive({...isActive, second: true});
    console.log("did something")

}
useEffect( () => { console.log(isActive); }, [isActive] ); */


  console.log("app is Open");
  return (
    <>
      <div className="App" key={Math.floor(1 + Math.random() * 10000)}>
        <Clock className="ClockBanner"/>
          <Routes exact path="/*" element={<Home />}>
               <Route path="/Folders" element={<FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} />}  />
              <Route path="/TaskManager" element={<TaskManager className="taskmanager"/>} />
              <Route path="/FB" element={  <FB className="login"/>} />
              <Route path="/ImageUpload" element={  <ImageUpload />} />
              <Route path="/Images" element={  <Images />} />
          </Routes>
        <DockIcons />
      </div> 
    </>
  );
}