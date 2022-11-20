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
import Images from "./Images";
import Component from "./components/Files/ocClick";
import Jobber from "./components/Files/Jobber";
import Resume from "./components/Files/Resume";
import ModalPortal from "./components/ModalPortal";
import Instagram from "./components/Files/Instagram";
import Discord from "./components/Files/Discord";
import Youtube from "./components/Files/Youtube";




export default function App() {


  
  const [isActive, setIsActive] = useState(false);


const handleClick = () => {
  setIsActive(!isActive)
}


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
          <Routes exact path="/*" element={<FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} />}>
               <Route path="/Home" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>}  />
              <Route path="/FB" element={  <FB className="login"/>} />
              <Route path="/ImageUpload" element={  <Component backgroundColor="white"><ImageUpload backgroundColor="white" /></Component>} />
              <Route path="/Images" element={  <Component backgroundColor="black"><Instagram/></Component>} />
              <Route path="/Jobber" element={  <Component backgroundColor="black"><Jobber/></Component>} />
              <Route path="/Phone" element={  <Component backgroundColor="white"></Component>} />
              <Route path="/Message" element={  <Component backgroundColor="black"></Component>} />
              <Route path="/Mail" element={  <Component backgroundColor="blue"></Component>} />
              <Route path="/Github" element={  <Component backgroundColor="white"></Component>} />
              <Route path="/Discord" element={  <Component backgroundColor="rgb(45, 50, 55)"><Discord/></Component>} />
              <Route path="/LinkedIn" element={  <Component backgroundColor="blue"></Component>} />
              <Route path="/Youtube" element={  <Component backgroundColor="black"><Youtube/></Component>} />
              <Route path="/Planner" element={  <Component backgroundColor="white"><Images /></Component>} />
              <Route path="/Planner" element={  <Component className="taskmanager" backgroundColor="white"><TaskManager/></Component>} />
              <Route path="/Resume" element={  <Component backgroundColor="white"><Resume/></Component>} />
              <Route path="/Settings" element={  <Component backgroundColor="grey"></Component>} />
          </Routes>
        <DockIcons />
      </div> 
    </>
  );
}